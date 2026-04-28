we get the file which is .ab which is a report of adb (Android Debugging Bridge) which is used to record system information
We check the file type weather its protected or not using file command and find out its not protected and we use the command  `java -jar ~/Downloads/abe.jar unpack cat.ab cat.tar`
which generates a tar file and we use command `tar -xvf cat.tar` so after getting the files there are many files to explore and there are images in one file where we can find the flag in a photo

