So content provider acts as medium between apps query and data base it creates a copy of the data base instead of redirecting into main data base
<empty-block/>
the content provider uses uri (uniform resource identifier) to take us to right place in the data base if the content provider doesnt have a proper protection such as enabling exported = true, someone else can get access to data base if he knows the correct uri
<empty-block/>
finding the uri 
after understanding the code in jadx we will find that if we enter the pin in AccessControl3Activity we will go to AccessControl3NotesActivity for checking the password and the load the notes from NotesProvider 
In the NotesProvider class we can find the content uri  
so we can use adb and the content provider uri to get the info directly using the command 
adb shell content query --uri content://jakhar.aseem.diva.provider.notesprovider/notes
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/7cbf96db-71b9-45b6-8c0e-b1366e49f936/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2K2KEM%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhDRtQy%2FLe4eT5fmevaFtr6Klcpu6qcI6HOXPeG9k0gIhAPA6ymgA5XoXKquw1yn43%2FFbxv5k2%2BtxEyl8BSZJamrIKv8DCFwQABoMNjM3NDIzMTgzODA1IgxkH8JUpWE9GWEPfjMq3AP5RV%2FOIDIxUQw%2BaSHQWHMlIgkchHb9GenXEwJlwUDlZVPanevypNPcGMHKd%2Btd8iSL3CLs%2Bovf2hnWK35YiPgNT5mBjHrK4YX0nws4xHFZ08IHsR1%2FFVKALbU6SkVpY5IqtGhtBosAMgv7rChNUe35yPZdw59vwdi%2F73K%2FkNLhRZKpg6IjjSmkf0gkpo0Tqssbh1bpDiJykSL9CQZWQgGfLjy59sJYXoIqx5C1Y2ZpA8R84IXYYc9T8xuCuftEgryDZu0bSKHbf5NTMzbTxc5obBT4LgpmyCQ8AWcRIWniUrRRko8rZwuRgZcxUPcR5mi470eCr7%2B75K55kKke%2FRQOFLF1X5Ky0V1tQpxVc0iaj5ZZ%2BvhJrJ9MJlDFjPKaz4U%2B%2FU50tKWqI20SDa%2BcegCHDtaORiPk81WDuGq6lWZH3LNWQao6KnMvkvMICI99QXOr1QwTUh6ldrgxiRLM%2FUstFbFm2STuWcYdlAqZtNR7w0jytfnb9GqHdMK45MJhUKtMWxMVnwn6yegbI8ZcAUXSufQfWUIflkblM7g3RYcDQidjNWRuaYMHj%2BgViaz3AnABm4NjSyM%2FVmAQsq%2FXMT3e6EcZAeE3UdUjiJGE74x31d1aJ0IT3buTUMvyfDCJnabPBjqkAWtgDZ0TGKWQ0kBcYdAzMImipiMa5hGhKHlgKjnfvZLErMfJzWMra34UDd%2BVnbg5rmWQtEWhR1Bqu8b5UlCfKLo%2FHjn4QaIbMF%2FcHhNE7YKTB%2Bw5t1t9nwMsr5uUK%2F4Qr2naKl7ytNJUuI5pKDQPz%2Fn3RQvaiD0BMU6WAM28xCjnkhBAaKh03J%2BnZqxEMdgHXtzaU8mcByTkeDmGjMX536MsPTi%2B&X-Amz-Signature=a956072491bd5d4a74542138e5fec6e505a6820e7907d3a62816618dd79b24ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and the basic command is `adb shell content://<AUTHORITY>/<PATH>`<br>
Extra flags 
\[--user \<USER_ID\>\]\[--projection \<PROJECTION\>\]\[--where \<WHERE\>\]\[--sort \<SORT_ORDER\>\]
<empty-block/>
if i am the developer i would solve this by changing the code in android manifest xml setting android exported to false not allowing other apps or devices to get access of db in the provider tag
<empty-block/>