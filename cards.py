import PIL
from PIL import ImageFont
from PIL import Image
from PIL import ImageDraw

import json

from copy import deepcopy

def createTemplate(cards, cardSize, cardBack, name, index):
	xCards = 10 if len(cards) > 19 else max(2, (len(cards) + 2) // 2)
	yCards = max(2, len(cards) // 10 + 1)

	xLength = cardSize["x"] * xCards
	yLength = cardSize["y"] * yCards

	template = Image.new("RGBA", (xLength, yLength))

	for i, card in enumerate(cards):
		template.paste(card, (cardSize["x"] * (i % xCards), cardSize["y"] * (i // xCards)))

	template.paste(cardBack, (xLength - cardSize["x"], yLength - cardSize["y"]))

	template.save(name + "_" + str(index) + " (" + str(xCards) + ", " + str(yCards) + ").png")

def createDeck(deck):
	cardSize = deck["cardSize"]

	addons = []
	name = deck["name"]

	try:
		addons = deck["addons"]
	except Exception as e:
		pass
	
	cards = []

	for card in deck["cards"]:
		cards += createCard(card, cardSize, addons)

	cardBack = createCardBack(deck["name"], cardSize)

	for i in range(0, len(cards), 69):
		createTemplate(cards[i:i + 69], cardSize, cardBack, name, i // 69)

	cardBack.save(name + "_back.png")

def createCard(card, cardSize, addons):
	font = ImageFont.truetype("C:\Windows\Fonts\Calibri.ttf", 15)

	img = Image.new("RGBA", (cardSize["x"], cardSize["y"]), (200,200,200))
	draw = ImageDraw.Draw(img)

	for text in card["texts"]:
		draw.text((text["x"], text["y"]), text["text"], (0,0,0), font=font)

	cardArray = []

	for cardType, amount in card["typesAmount"].items():
		if cardType == "normal":
			cardArray += [img] * amount
		else:
			newImg = deepcopy(img)
			newDraw = ImageDraw.Draw(newImg)

			for text in addons[cardType]:
				newDraw.text((text["x"], text["y"]), text["text"], (0,0,0), font=font)
			cardArray += [newImg] * amount

	return cardArray

def createCardBack(back, cardSize):
	font = ImageFont.truetype("C:\Windows\Fonts\Calibri.ttf",25)

	img = Image.new("RGBA", (cardSize["x"], cardSize["y"]),(200,200,200))
	draw = ImageDraw.Draw(img)

	draw.text((cardSize["x"] // 2, cardSize["y"] // 2), back,(0,0,0),font=font)

	return img

def main():
	decks = json.load(open("cards.json"))

	for deck in decks:
		createDeck(deck)

main()