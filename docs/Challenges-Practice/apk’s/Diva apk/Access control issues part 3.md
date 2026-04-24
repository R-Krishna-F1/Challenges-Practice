So content provider acts as medium between apps query and data base it creates a copy of the data base instead of redirecting into main data base
<empty-block/>
the content provider uses uri (uniform resource identifier) to take us to right place in the data base if the content provider doesnt have a proper protection such as enabling exported = true, someone else can get access to data base if he knows the correct uri
<empty-block/>
finding the uri 
after understanding the code in jadx we will find that if we enter the pin in AccessControl3Activity we will go to AccessControl3NotesActivity for checking the password and the load the notes from NotesProvider 
In the NotesProvider class we can find the content uri  
so we can use adb and the content provider uri to get the info directly using the command 
adb shell content query --uri content://jakhar.aseem.diva.provider.notesprovider/notes
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/7cbf96db-71b9-45b6-8c0e-b1366e49f936/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665475TWZE%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcqiIuUQ6brACeSENu3bHc1re8M2smPo5OnUdbnjagRAiEApJpOKbxcm3vy41k9rWOorHZYjNiBF3vbq97NodZyRBsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGQaaybdSlYkn6beNircA2U7XZyim4X7ggiUSFPouWG%2FAZhDVtvNkk0u5WSTSp%2Ft7pHnH1PHR5xH2UUuTIrOAablz4GjQKko1%2Fi9ZDd9z62DndSvMDQT3RH5hnpU4oK%2BdRFSHhgcCMIfDN6sSBgPTE4%2BzNKUEW2oe1oXbRuey3b0FYBav81B%2B0erbsP6fWdbcM06TJB5Yk131Aw54ACmEamBC26D5iGCwtk90LYFoD4%2BYlrt9ffEw2LRXPcqBsuIv8CAHutP9lX%2FvLXS2qDo2yq%2BLcMI16R2keYC1zw6H4fTnrd7nXGp3fv%2Bfh4oret6oZYv0biEmOQeQsDB7HBv%2BlY6Sm9xkxoAifHiH9jJsm8JUFdhpmquqK%2Fh%2Blk8s8p6npX1hXl47MTJOhmnGQi7%2ByhiDS5boylMJ6mjXbkt2KqHMs8Hypq4FWAK1YDRs1baTC9shQRl01Y%2BjmuyIlmhMXjRf9WirANesAQ47eTsx2UCXeKPmxpgfi7yD5N5Favp6tI%2F%2BJu8DT2BXyCFhsbqWdRMqm1%2FBMW2vAF6Rits2PCOT6VbiEhXiD0%2B%2FaCkqO3Hl2CD29Ia6uBMxRu3xZOSFPB8l9FFlp%2BcBQaHZSFcb%2BHkPI8OtgzAodFAs6Rsquk6C3xNjOYOgRE4FUpgMKb%2Bqs8GOqUBtKJTjWorbjVmRYfeMDe6OrdSK5lFVFS3WU6xG6mynQTPci9iXwohTiRLQ4vjjY5WW%2F6ae2zGHgzGdtqcdW5naKFuTRIBUDzRm6qrl0YsFVQmqxavoRPjITFhU3b%2BIIQWYD4%2BqpkI65YiunueTRkSJR3r5nBqFLB6JMbHmeRuTwBNhHBlLwOopdkWIqT8p5nF9nB8e2a9ZnKKmkO1lleute48z9pn&X-Amz-Signature=7eee51ab5c0a861fee21d1e2027b14ebd4017e83f207c741513161534ebc7a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and the basic command is `adb shell content://<AUTHORITY>/<PATH>`<br>
Extra flags 
\[--user \<USER_ID\>\]\[--projection \<PROJECTION\>\]\[--where \<WHERE\>\]\[--sort \<SORT_ORDER\>\]
<empty-block/>
if i am the developer i would solve this by changing the code in android manifest xml setting android exported to false not allowing other apps or devices to get access of db in the provider tag
<empty-block/>