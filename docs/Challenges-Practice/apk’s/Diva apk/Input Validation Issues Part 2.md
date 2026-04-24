we have to find any sensitive information apart from web url one of the way is we can access the systems internal files using file protocol
<empty-block/>
so there is a file called doubts.txt so we can read the files information using this url
file:///mnt/sdcard/doubts.txt
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/508a839b-0b0f-4781-91ae-c0388ee7f7b9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIOF2WG%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC78SQ0S7QnmbGG5F26t%2Fh%2Fmthe%2FuVIKRdIlpWUFSYHFQIgM%2FceR8TlPwQ%2FWsWNgXfJCFEBO2DSwQUrHvwKEGl2IBIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNamIVHJ5NOMbeUSRyrcA4E4nw1Joi6XMkr9%2FDXOeAYqpx6TiQttntnZACes2vLs09TNt92rKf%2FG5fZTLUW8zvaiGTMknsLGto%2BxvxkSi2XFCT6Cy2C5YBQEn8cC2jUgDUV7lwihHgwOCFux9EPEv8PnGQmSf5wIbkxHi%2F5NV8JymOfitPsl106nNGsLaDQiCZ7Fl2wXuqP12%2BHyN217Ci4%2F7KimYlBgjDixoZEeYnurTmlW8r5fwv2KOHhReYG%2F6pB0s3tanzx%2B65HeysrVHSMK0RTNQuazQPJvm01N1TovNkDF1FXunX0eprVYbwkY5ELuQkTkUeH%2FBN2mXt8tDX0Ul%2F0AGwBpEDScAogxTDNAHX9Wu7P5SMSJ%2Bc%2FYc9oiEf2RKA32xmFnJzrLgFs1%2F%2FbQ0M%2Fu7JWTB%2FPf78bECtRcGPVts86I19GCsyRmq1XOrjwR1WffF74eRq33dMUYMjMyUBEIFRUBWrllu%2FRLQrwJQ0u7WbXTxVW7NFcOtdYgyj0fEeVkeU%2BHyKQBMuTkiu8o6mD%2Fr%2Bxum2hYXse2X1F1UDUVToRjdQ9tfp%2F9CRWl41WFHFp87T8OtHSRuAX0lVlUo3jgTO5TUMBSke1v3QKJ6IyiRDY%2BRaFy1QCH1kfQvWxzGBczEJWMFoMoMInQq88GOqUBQ5fgRS8Pr8TdQdNmktHr2KGUOkTz3NcOX3srgCjOgnPh3sPlA09pPYlV7ibTKYKv%2FonOpwdBe3TQLUQaSHbTaCYnSe8uVop%2Bo560WJ8P5i093%2BPjxynyDsdZ3nw7ycNmChklOVkgaF%2FtHMuXoORzQfaVfpryM1H9hNFzh%2B%2FPWtHSy4ATEj4oQcq8xtmMZs%2BErWFVE3jSM1LSDLWHq%2F4F%2BpsIItZc&X-Amz-Signature=07738ff6a1e349411d6533bb989c46aa217fdb2b5c84ff5a48a2e48512e664dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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