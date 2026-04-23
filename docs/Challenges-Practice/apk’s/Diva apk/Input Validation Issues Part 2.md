we have to find any sensitive information apart from web url one of the way is we can access the systems internal files using file protocol
<empty-block/>
so there is a file called doubts.txt so we can read the files information using this url
file:///mnt/sdcard/doubts.txt
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/508a839b-0b0f-4781-91ae-c0388ee7f7b9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LN7NTCE%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXB9FPnTeXk95vwOGOFVvshXRu7xIL%2FyyrLz55jjoQTAiBbZcsh6LNNtfnolQ7VXFwFXbjB18wYSAFCXIWpwhf7jCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMRAroZlkf1zPyMdXbKtwDvz%2BSK%2BgRRGr6ReM%2FwzaXW3%2BqNdzONfTcZ2n%2F%2BzA9qaCLKKj3IDCPN9mAnMa%2F04LfmPOoGPjxpodTRjNfesEW1xo6HLBAzSZ3wwMLLNl1i2TzD%2FMfb1ZHGcsGc6gHewUWUXYEP%2FMxKq58vfnlAGJOwfSk4%2Fk1w8V7cccszjtYfZPqIACwW5BJzzUciOAlhrynx5BBpg00d5CaMU33EXylWFGBm818YirBvWG6cWeN8PxVK0P7P3oZdsy7c%2F1h2jXF59SJMyOc419c8mJ%2BgBnMWJFIccLNLgW3Htg2UsxkF5bSfno6742pO28JseoOxaoFN6nZymf%2FjOep3cN7K43HRoyKvHLcDSwLzpbZbQRhqS9fMenZ5DqXF45txdkhWJakI0hFk0vZtvIzjpzWWZtOFLmdomFuefXjBZbXU%2ByhLNeZBcGgVQvAnd3nsNuQKugpyQR41I6azp12Ovo8Ph9IDm9WM%2FpzAepIBzngKffIUdk5TjTl8ACDagtGandHmF2SmqmqAEBm0mzZc3LgyVEbMtdJ%2FItd4Wl0DQ1j51zj9Y4nWODcNX%2BS1QZR9NoqSx7j6krTRaEAGX0lp1NFhiCxQ%2BYOyL59tw9naFVGubtTKBtn8bVjcyV7z%2B1sCe0w%2BZymzwY6pgGHXkHfhVVdMQcfk0qNqUef7rUo0ReZsEp7CF8KM933tw0%2FKUtsASnj0zJO4xZEWM2%2BN9ejgtT4wtvQE%2B%2BFAdRggQJ7Z0LYNeacppilSzXc0j9FWF3jRaM8shBxFPiJbVLouUhQba%2B09n3rIvgfI%2BKTWiK%2BcRR6MDmf0EM5NQGTzgczbqUk7w1afRflPw1amamhPZPXPwSvm736IeylFk62HTqtC4ef&X-Amz-Signature=c94af8ce920f4e9e900b0f37a5946d3d4de4c364c377a26dfc19b221221fd45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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