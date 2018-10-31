import os
import zipfile
import shutil
import glob
import fileinput

#Create a temp file for all passwords
with open("allpass.txt", "w") as f:
    f.write("")
#End of creating empty temp file


#Combine all password files into a single file
read_files = glob.glob("Resources/Passwords/*.txt")
with open("allpass.txt", "wb") as outfile:
    for f in read_files:
        with open(f, "rb") as infile:
            outfile.write(infile.read())
#End of creating temp password file



#################################
## Create a temp list of pass  ##
## words from the text files   ##
##                             ##
#################################

#Create a temp Library
passwordlib = []

#Open the temp allpassword file to put into temp list
with open('allpass.txt', 'r+') as f:
    for line in f:
        line = line.rstrip("\n")
        print(line)
        passwordlib.append(line)
f.close()
#End of temp list creation


#################################
## Locate all zipped files in  ##
## the directory path and run  ##
##  each through the PW test   ##
#################################


directorypath = 'Resources/ZippedFiles/' #Set path of zipped files
for ZippedFileName in os.listdir(directorypath):#Cycke through all zipped files in folder
    for line in passwordlib: #Cycle through each password in the password library
        passattempt = line.strip('\n') #Remove the \n character from any password
        try: #Begin loop for each password try
            #print (passattempt + " Correct Password")#Print to confirm passwors are cycling through
            zip_ref = zipfile.ZipFile("Resources/ZippedFiles/" + str(ZippedFileName), 'r') #Select the file to be opened
            zip_ref.extractall("Resources/ZippedFiles/unzipped/", pwd=bytes(passattempt,'utf-8')) #Extract files from zipped file
        except: #if password is incorrect, ignore Runtime error and move to next password
            pass
        else:
            print(passattempt +" is the password for " + ZippedFileName)
