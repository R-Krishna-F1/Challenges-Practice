After opening the app we will be provided with the screen and when we click login we get the authentication error message
![](images/Prints-img-0.png)
so we go to jadx and analyse it and we can find if the authentication is a success in main activity it sends an intent with a label SECRET_KEY to home activity which contains the return value of a native function 
![](images/Prints-img-1.png)
The home activity takes the function and comapares it with the return value of another native function 
![](images/Prints-img-2.png)
<empty-block/>