import PIL
from PIL import ImageFont
from PIL import Image
from PIL import ImageDraw

import json

from copy import deepcopy

def createTemplate(cards, cardSize, cardBack, name, index):

	xLength = cardSize["x"] * 10
	yLength = cardSize["y"] * max(2, len(cards) // 10 + 1)

	template = Image.new("RGBA", (xLength, yLength))

	for i, card in enumerate(cards):
		template.paste(card, (cardSize["x"] * (i % 10), cardSize["y"] * (i // 10)))

	template.paste(cardBack, (xLength - cardSize["x"], yLength - cardSize["y"]))

	template.save(name + "_" + str(index) + ".png")

def createDeck(deck):
	cardSize = deck["cardSize"]
	addons = deck["addons"]
	cards = []

	for card in deck["cards"]:
		cards += createCard(card, cardSize, addons)

	cardBack = createCardBack(deck["name"], cardSize)

	for i in range(0, len(cards), 69):
		createTemplate(cards[i:i + 69], cardSize, cardBack, deck["name"], i // 69)

	print(cards)

def createCard(card, cardSize, addons):
	font = ImageFont.truetype("C:\Windows\Fonts\Calibri.ttf", 25)

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
				print(text)
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