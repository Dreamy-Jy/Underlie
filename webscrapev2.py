# See readme for most information and references for the code.
# https://csvwriter.readthedocs.io/tutorial01.html
# A collection of needed libraries to run the code.
from urllib.request import urlopen
from urllib.error import HTTPError
from urllib.error import URLError
from bs4 import BeautifulSoup
import csv
import requests


# The below section is setting up all the websites that will be able to be scraped.

onion = "https://www.theonion.com/"  # Confirmed not working 18 nov
apnews = "https://apnews.com/"  # confirmed working 18 nov
cnet = "https://www.cnet.com/news"  # confirmed working 18 nov
bbc = "https://www.bbc.com/news"  # confirmed working 18 nov
inquire = "https://www.nationalenquirer.com"  # confirmed working 18 nov
natgeo = "https://blog.nationalgeographic.org/"  # Confirmed not working 18 nov
justice = "https://www.justice.gov/news"  # confirmed working 18 nov
click = "https://www.clickhole.com"  # Confirmed not working 18 nov

# To control the loop
loop = True  
# Prior to the elif statements is the set up for the file output.
outfile = open("news.csv", "a", newline="")
writer = csv.writer(outfile)


# An elif statement is set up to check the website for the proper webscrape format.
# As each statement is doing the same thing to each website, the code is similar across the board.
# This is also done in a while loop, where an exit case is used to help expedite scraping the websites.
while loop == True:
    # Grabs url, uses it a bunch later on.
    urlcheck = input("type in the full website here, see readme for list of supported sites with correct formatting:")
    if urlcheck == onion:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        titles = res.findAll("h1")
        for tag in titles:
            writer.writerow([tag.getText(), urlcheck])
            print(tag.getText() + "\n")
        print("All done")
    elif urlcheck == apnews:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        titles = res.findAll("h1")
        for tag in titles:
            writer.writerow([tag.getText(), urlcheck])
    elif urlcheck == cnet:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        titles = res.findAll(["h5", "h6"])
        for tag in titles:
            writer.writerow([tag.getText(), urlcheck])
    elif urlcheck == bbc:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        titles = res.findAll(
            "a",
            {
                "class": "gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor"
            },
        )
        for tag in titles:
            print(tag.getText() + "\n")
    elif urlcheck == inquire:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        # h4 tag only. However, doesn't get full story header or the 'main' story headlines.
        titles = res.findAll("h4")
        for tag in titles:
            writer.writerow([tag.getText(), urlcheck])
    elif urlcheck == natgeo:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        # Another one like BBC, it's in h3 but it's in h3 class, and a url within it. BS doesn't like h3 class.
        titles = res.findAll("h3 class")
        for tag in titles:
            print(tag.getText() + "\n")
            writer.writerow([tag.getText(), urlcheck])
        print("All done")
    elif urlcheck == justice:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        # span class set up good, but has press release header, figure out how to get rid of that.
        titles = res.findAll("span", {"class": "field-content"})
        for tag in titles:
            writer.writerow([tag.getText(), urlcheck])
    elif urlcheck == click:
        html = urlopen(urlcheck)
        res = BeautifulSoup(html.read(), "html5lib")
        titles = res.findAll("h1")
        for tag in titles:
            print(tag.getText() + "\n")
            writer.writerow([tag.getText(), urlcheck])
            print("All done")
    else:
        print("Your url does not exist! It's been added to our database!")
        outfile = open("newSites.csv", "a", newline="")
        writer = csv.writer(outfile)
        writer.writerow([urlcheck])

    answer = input("Do you have more sites to scrape?: ")
    if answer.lower().startswith("y"):
        print("Continuing webscrape")
    elif answer.lower().startswith("n"):
        loop = False
        print("All done")
outfile.close()
