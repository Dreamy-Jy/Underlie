Author: Samantha Sanders
Class and Semester: CPS353 Software Engineering Fall 2019
Version: 2.4???
Last Update: 18 November 2019

About
==============
The webscrape code runs in the latest verison of python and heavily relies on beautifulSoup and the csv library native to python. The code requests a user to provide a url, in which it then scrapes the page for news titles and authors if they exist on said page. The following is the list of supported websites.
- https://www.theonion.com
- https://apnews.com/
- https://www.cnet.com/news
- https://www.bbc.com/news
- https://www.nationalenquirer.com
- https://blog.nationalgeographic.org
- https://www.justice.gov/news
- https://www.clickhole.com


How It Works
==============
The code has a set of websites that have been checked over and set up for scraping. The code prompts the user to enter in a website, and it will check if that website matches any of the pre-designated sites. The sites listed in the About section are exactly what the code is looking for, so if it is not working please copy and paste from that list. Once it sees the site, it will go into the corresponding elif statement. Each statement is set up specfiically for that site, and will scrape the news headers and authors, if they exist, through the use of the beautifulSoup library. Once the information is scrapped, it is saved in a list. That list is then parsed into an excel sheet as a .csv file. If the site is not found, it opens up a different .csv file and places the user's input there. For the .csv output, it is the article title, the author or N/A, and then the website that the news is from.

Once the csv file is set up, it is then accessed by the database code. Due to this design, however, both sets of code CANNOT be ran at the same time. The scraper is constantly trying to write to the file, while the database is constantly trying to read it. This may be fixed in the future, but for now the code must run when the database is not running. 

What's Needed to Run
==============
The code requires a set amount of things to be installed on the host machine to run. Specifically, this code needs:
- Python 3.7 or newer
- Pip package manager
- BeautifulSoup4 library
- csv library
- urllib

What's Currently Working
==============
- APNews: 100% \o/
- BBC: 100% \o/
- Clickhole: 50%. Not scraping anything anymore.
- Cnet: 100% \o/
- Else Clause: 100% \o/
- Justice Website: 90%. Figure out how to get rid of extra blank rows and news category.
- National Geographic: 50%. Code tested previously, but now recieving a 403 forbidden error.
- National Inquierer: 80%. Figure out what to do with the cut off titles.
- The Onion: 50% now? Not scraping anything anymore.
- Looping: 100% \o/
- Writing to CSV files: 100% \o/

What's Next
==============
- Figure out APNews' repeat issue. For some reason it repeats the first news story three times.
- Figure out how to get ads out of cnet's stuff.
- National Inquierer's full title issue. The side stories have "..." in them, so it may not be possible. If not, figure out how to remove the "..." from the title.
- The DoJ news articles still have "press relase" on them. figure out how to strip that out too.


What's Been Learned
==============
- 403 errors will cause the code to collapse upon itself.
- Python is psudeo code but is also really grumpy sometimes.
- Python in general has been learned.
- CSS is hard when there's thousands of lines of stuff to parse through.
- Running code while the csv file is open and burried behind a hundred windows is not something that needs to be debugged.

Changelog
==============
18 November 2019
-----------------
- Looping to continuously read has been added. 
- Authors have been removed. Only two sites had them on the front page, and it wasn't worth it to our machine learning system to deal with the mismatch amount of information.
- Added the "What's Needed to Run" of the readme.
- Cleaned up code to remove excessive terminal prints used for code testing.
- Changed how the script interacts with csv file, overwritting will happen no more.
- What's next section updated with changes done from last update.

7 November 2019
-----------------
- Readme created!
- Authors marked in comments for each website. Currently only 2 of our sites support authors.
- Figured out the basics of exporting to csv. Needing to complete csv export for all sites.
- news csv created. Tested with the onion.
- Finished coding for the onion, for now.
- Figured out how to put multiple things into one list, such as h5 and h6. Useful for the two sites with authors.
- Created a second csv for sites that are entered but aren't coded for.

29 Oct 19
-----------------
- Figured out the magic of CSS classes for Cnet's website. Still pulling random ads.

27 Oct 19
-----------------
- Created a changelog
- Deleted the switch case and supporting code. It wasn't working and had to have more code to support it than was necessary.
- Implimented the elif case. Redundant and not pretty, but working.
- Broke a lot of things trying to get rid of redundancy in the elif statements.
- Started a changelog to help remember what didn't work last time with the code.
- Cleaned up used website tutorials above with actually useful websites referenced.
- Started to use Python Black to uniformally format code. The playground has a really long url, get to it from https://black.readthedocs.io/en/latest/
- The onion, BBC, Justice, and Clickhole are comfirmed working!

Reference Sites and Documentation
==============
- https://www.crummy.com/software/BeautifulSoup/bs4/doc/
- https://medium.com/quick-code/python-web-scraping-tutorial-74ace70e01
- https://www.digitalocean.com/community/tutorials/how-to-scrape-web-pages-with-beautiful-soup-and-python-3
- https://likegeeks.com/python-web-scraping/#UsingnbspBeautiful-Soup
- https://stackoverflow.com/questions/1663807/how-to-iterate-through-two-lists-in-parallel
- https://stackoverflow.com/questions/10333343/how-to-output-a-multiple-rows-csv
- https://stackoverflow.com/questions/46026399/export-data-from-beautifulsoup-to-csv
- https://black.readthedocs.io/en/latest/
- https://realpython.com/python-csv/
- https://www.youtube.com/watch?v=cOCwwVGOba4
- https://www.youtube.com/watch?v=kfTRIYZMma8
- https://www.youtube.com/watch?v=W5AZeNGB6Ds