So content provider acts as medium between apps query and data base it creates a copy of the data base instead of redirecting into main data base
<empty-block/>
the content provider uses uri (uniform resource identifier) to take us to right place in the data base if the content provider doesnt have a proper protection such as enabling exported = true, someone else can get access to data base if he knows the correct uri
<empty-block/>
finding the uri 
after understanding the code in jadx we will find that if we enter the pin in AccessControl3Activity we will go to AccessControl3NotesActivity for checking the password and the load the notes from NotesProvider 
In the NotesProvider class we can find the content uri  
so we can use adb and the content provider uri to get the info directly using the command 
adb shell content query --uri content://jakhar.aseem.diva.provider.notesprovider/notes
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/7cbf96db-71b9-45b6-8c0e-b1366e49f936/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNT6Z543%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDoVeRYqL418WAubLFv0q4KT24CB%2FaSk04J0rxRj2fzOAiAYiFm39Lw5Uu7UQlCkBP9RqCRNLtSkRXzK%2FrJmvfZk1yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXOIV%2BDDPZ0UHQtEOKtwD9oZPciTdJ55P6qUTomcAOT47%2BE4Pwdzjr81LIg4mY1iirOGPOYb%2BNZOkZ5qmgm30mSrONjaTH7W66rgMguXaqw4vyR5%2BklbYLGyJe2YQEIdEWelyubI82X1TTi8LgsjbI2Or2K1RV4DglU%2B1fetVk8OJ7P%2FYqsznHHqBO8yzV4yHIJwoxbuHeSf0khRkusvxJz%2FRczZhso3YmuAZJAoEeQSf5UZPM3v7iydy8faQS7qR98ctB9998ITFucc2eAitLgc%2B63PyHct91ICwPPAcRiSlu6NfaqMJV9lD7uJxvUX%2F7u0rHoBAZvPMA%2BHNjBp7JPl24DnytUy5a9GIhGr7ec91rhdCl9v%2BWyB91MGSwcJQpW1Ovj5Ohoc9BJ6R6xDf1FASr7Mo6LPH6%2BRCTCKfhrf50AuVtUiy3VdpGuKiiyDYlwnWo%2BLlZJViii7Kdyk3nf9z7PeQhAf8AWxxKyh4qz6BurlH6mCCkLmP1%2BrFhAVWrSRYm0cIRenExPDq4B%2F0hw22QKys%2BhRUA5Mo%2BYDapjjJlid%2FVqcQtscxqOTCqxd%2BVH9nHf9LP1whNod1j39leZ1ikY0vg%2FL7DM2c44xelCSkwOwesU8C0WA7zol82eaRjpmHksnBT2KG0p4wpPiezwY6pgEWyeUd9De8AZiKyUc1S9sJSksDf6PxtwnVJMCeOjs9gvw7yWJO7o%2Bk0LurU3lOhbNjtjSmj9wNHIXrYflxZMfURvC0BmLnmc9UrBbZf5ul8kY%2B2DHiCpNoairmQkOD0ZYE2WBkt1xRTZzUmaqtfwnEIw6SEiwCwcKDWUysneNo3UkFz1jG9rB0RTwUe%2BFMD4E%2FX3cvQoVIi5WQ%2Bd6MRosU5q%2B952EA&X-Amz-Signature=a7de56c6fa891c881ca1f88948c088679b48363f3dc3870e83b26e8f27a1d375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and the basic command is `adb shell content://<AUTHORITY>/<PATH>`<br>
Extra flags 
\[--user \<USER_ID\>\]\[--projection \<PROJECTION\>\]\[--where \<WHERE\>\]\[--sort \<SORT_ORDER\>\]
<empty-block/>
if i am the developer i would solve this by changing the code in android manifest xml setting android exported to false not allowing other apps or devices to get access of db in the provider tag
<empty-block/>