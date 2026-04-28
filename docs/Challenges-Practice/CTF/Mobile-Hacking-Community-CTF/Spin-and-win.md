> Description:A vulnerable app stores sensitive data using insecure methods. Can you uncover where they’re hidden and retrieve them all?


After we install an app we get a text message as the flag is stored as 3 parts so if we go to jadx we can find the first part of the flag
![](./images/Spin-and-win-img-0.png)
So by this we can confirm that the 1st part of the flag is shared prefernces
![](./images/Spin-and-win-img-1.png)
If we inspect more clearly we can find the second part of the flag in jadx also
![](./images/Spin-and-win-img-2.png)
So by this we can confirm that the second part of the flag is in the database
![](./images/Spin-and-win-img-3.png)
If we inspect more in jadx we found the 3rd part of the flag in jadx 
![](./images/Spin-and-win-img-4.png)
so by this we can say its in a external file called Vulnerablefile in InsecureStorage fodler
![](./images/Spin-and-win-img-5.png)
so the flag is **`MHC{4n0hzeesvji4wiecmeho7r4np}`**
