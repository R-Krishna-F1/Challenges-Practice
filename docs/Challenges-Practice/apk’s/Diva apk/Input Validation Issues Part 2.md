we have to find any sensitive information apart from web url one of the way is we can access the systems internal files using file protocol
<empty-block/>
so there is a file called doubts.txt so we can read the files information using this url
file:///mnt/sdcard/doubts.txt
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/508a839b-0b0f-4781-91ae-c0388ee7f7b9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSCVRD6%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCSt5wxZeaCOT8Ih2VoTc9pllF5uj64dF5YQBvUNxPUPQIhANkxnq49%2FORAuQ1k9%2FnNU5nfYO69MCsMRplwUNl067P1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyeEN%2B4fedDN%2B03cJ4q3ANIComzcHPajzpSqW60HwaZH3WMw2k1UGmqFDSRKMtbA7GGU7PBaBoal1PeQklLeMbVZuLPwyuWxwk2fphbw0nKDjI3eQa0QOLXpJEhrjSDJLp7%2FihbEeknP5mRbSDKKDHLMi8Xpa%2BYPFEH7UJqCLGpTPPxnsTzGS4u%2BlH%2BgERkTg2brAhLfXzeLr5AWTP4%2F2Wof6olMYhA9PRdI3s7F48FmT8%2BHmqY7OahgeQ%2BXoQxTsGD4xD1gaikgqPvEj4yPcwaulKoA1u4CDzfJKSFco1Y%2BeCuIR%2Bry0%2FVvhbm2EnY7glP98zHsJp9vt%2B%2FfDwXLIaRmiatFnCUSOsuLeDi5qI0hCLpHMVfXenCf%2FNaGX7IEqwLz%2FitmdHu6pqmwQ8N383U1zr6n%2BYzYKrqxvYdZGXkv6f3Ncov%2FlHkqhPsNR5sNDuaaV8RFlW0oOo7%2FeRbICqXcb4UaSwibLeH9c2rt4p0nAQwqQ3Bb1IBjCimy7HsM3Axkl3JiWejWEg1UvKzs2ebitfkqOk2GkvTmU6A5MPEf10uVwOyrskctx%2F0HoxWeu3ER6pknSgqzAxMG50nCooog8QQWmxpFFXEz7fQnKSDTpP6wFhWZIVRFdmzglyJHMccxGtscc21L94TTTCg%2BJ7PBjqkARTxhKV%2F%2FY5C1ov5OJH4SfEsUaLy8UUhhRWC6%2BWRAR6MANh6iOK5vizGYvVtpPfX%2B1zWHCU37bd1UWcDEGCVRkMZWOGVTY4GgSIIScV3RwTFXKMkqUIKUyLLYqepFwU3aLbTlhmTPmNIX3ylSqFIQIy5ObZWuYvqHFo%2FtYr512EvaYbH8j0pFq3qaCfABhUtcymNS3uPKmCZK2xqV1btEiQzG1%2BM&X-Amz-Signature=1f448524d6cd6b631fe4874e2b0d32c7f79050a758db55c0094002aabddf36a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the general syntax is file:///\<path_to_file\>
<empty-block/>
we can fix this by changing the code `wset.setJavaScriptEnabled(true);`
to false because JavaScript is enabled, an attacker can type `javascript:alert(document.cookie)` or more malicious scripts into the URL bar. The WebView will execute that code in the context of the application, potentially stealing session [data](http://data.java) java script can be used to read local values 
we can add few lines of codes while creating webview 
wset.setAllowFileAccess(false); <br>wset.setAllowContentAccess(false);
which doesnt allow webview to load files
<empty-block/>
also we can add few if else conditions 
if (input.startsWith("https://")) \{<br>wview.loadUrl(input);<br>\} else \{<br>Toast.makeText(this, "Only HTTPS is allowed", 0).show();<br>\}
<empty-block/>