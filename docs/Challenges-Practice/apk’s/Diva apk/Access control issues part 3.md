So content provider acts as medium between apps query and data base it creates a copy of the data base instead of redirecting into main data base
<empty-block/>
the content provider uses uri (uniform resource identifier) to take us to right place in the data base if the content provider doesnt have a proper protection such as enabling exported = true, someone else can get access to data base if he knows the correct uri
<empty-block/>
finding the uri 
after understanding the code in jadx we will find that if we enter the pin in AccessControl3Activity we will go to AccessControl3NotesActivity for checking the password and the load the notes from NotesProvider 
In the NotesProvider class we can find the content uri  
so we can use adb and the content provider uri to get the info directly using the command 
adb shell content query --uri content://jakhar.aseem.diva.provider.notesprovider/notes
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/7cbf96db-71b9-45b6-8c0e-b1366e49f936/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAH2W5D%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T045003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIA6glSpXcOFTfnfCKIf%2FIpLgVxu6Mn96N6JGmxRbSMXOAiBQ%2BdrLEnrNndDPrE4CPQWNiPnvxb9t2%2FW%2Fjz18ivUlUyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtbxZMfHtRUwbWAj9KtwD0Zd%2Fv5pyj3%2BD0Ggpx8j2oue224lpm%2BJ2K9szsEIywBTkfexUYc56jgH2MwIh31u8K1KVzzNqqIKMl8yDi7p00OfqOT00nIWdz9wE0bfV3wHVUjf09Qsq9ppJfaWkBrbAiMQWcwhv10NiM2EmdR6pIpZvBO4hF4Y8hlTHW8ZL3aRBp9CDgsXQNqfaLs%2BgywbNGm%2BJ1%2FqjVPsbHbzCUh%2BgeE%2BiMCxeVa4SEOFPk9waVmL3YxzK3ie0OagjuHQUwtXfKokYIOXhoZ2jfM0mhAx4X0BTphbhuILBWy2nCXXNZj6xiURaG852xy5cGEWE8lS0i3G%2BKoU%2BTk%2FSrbSH6sVJi04MPPe9in0Df11AzIsPbg%2B6iFulX0upyaF88jQzqNrdzf8TOsNeQ70QtRdq3fv19KQosZy6MIkH%2BX5kkcGLvBDv7XgfsFjzKT%2Btol5RkokRI3xDHEaliswGUGSfPY%2FBFS5IJUZR0FpVGXhvTp6SabGyERmQ7byqGPPAu40plTMFQCtb1w8JaNejM65i%2FbC8628cobwvRciDtVTwb%2BFr1zTrQ428pgKgZiHA%2FTuhcHpKmHcJkqdE4fEsYQAMnn3dZoYFNWyMXZV6Yni2NgSUfDPDjA4ylDH%2FljsK3nYwn%2FmgzwY6pgEJgyRxoq53l%2B5X3iTzREHG3zVEN4J9ZCA0d5ALXs29ROy80lFUI53mLblP%2BSWxYEIcPAgqPZPUfOyxcB1f6qP%2ByHw%2FQHE5cqROTRjTq6tvMpZKUgcyVLqEnHzm8Dj79uJylHR0wKH1%2B9JSDWxGr4o76%2BUm%2FLYi8fN%2FlRDvtvJDvZKiDR5AQ4QKuLh6o4oGGMvqOCx6XA3KIMNpD4BEPUSgrkK4NaZO&X-Amz-Signature=5eaf6ce0dab734ce71e0bf54ff0fe68d0141305eddccda45f16ca7134b63aaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and the basic command is `adb shell content://<AUTHORITY>/<PATH>`<br>
Extra flags 
\[--user \<USER_ID\>\]\[--projection \<PROJECTION\>\]\[--where \<WHERE\>\]\[--sort \<SORT_ORDER\>\]
<empty-block/>
if i am the developer i would solve this by changing the code in android manifest xml setting android exported to false not allowing other apps or devices to get access of db in the provider tag
<empty-block/>