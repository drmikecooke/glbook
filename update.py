from time import strftime,gmtime
with open("_config.yml","rt") as yaml:
  content=yaml.read()
date=strftime("%d/%m/%Y",gmtime())
newcontent=content[:174]+new+content[184:]
from shutil import copyfile
copyfile("_config.yml",f"retired/config{strftime('%d%m%Y',gmtime())}.yml")
with open("_config.yml","wt") as yaml:
  yaml.write(newcontent)