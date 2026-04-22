we have to find any sensitive information apart from web url one of the way is we can access the systems internal files using file protocol
<empty-block/>
so there is a file called doubts.txt so we can read the files information using this url
file:///mnt/sdcard/doubts.txt
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/508a839b-0b0f-4781-91ae-c0388ee7f7b9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4XW4NA%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T045000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD7LZMpigwdtj40oOjqRlwOmZMngwGIejDqoj2KLGnXlwIhAM4CKkCVSt2PzX%2Bokrm9pVgU5HXiMqO3oOVVZqEZD8nsKv8DCEQQABoMNjM3NDIzMTgzODA1IgzULznqH2oRTabipuUq3AONUeVLoRl6ETSbEFQ6AWLKP9kkHsIquY4a7lXHZjxhEb9%2BrL3RyO8pkiV5UsqrlsdUIqQ%2BzCYlr%2F3bTUjT0Bawo9QFrElXJECs8SWsj8sWRTZPjdGwvR1SH2jZ8rOAavhIdjOGp09dUVuMeJjSgPQrkx19kUiUKi4fsVvZMKBzquQSmDosOB2GunMAW%2BY3xhq%2Bj%2F91uHqppFh2lo7FRBVZtkV8atUmFJtCA%2FOchob4daDCuoy%2FY3xZ3skxH8vkcHF%2FPu0CTDM2hUoDF0PGiSWhHahUc%2Bzlczb6ckCM%2F86kraSuq8vKuQOjyr2uZyY2%2B9f%2F7mVTDWC%2BuVkTPv6vly4Ilo%2B99KLzz8nHVf5DCUCsTTQKifpttwfbZky848IqNhU7Phw%2BkSDp18DRWYMu60RzglyjaqjhymhdyPpr89EcKeGvDkck9B8u3cB4CklOcSw%2F0d7BxiI%2B2mFi%2FtsmFEOIkuH8%2BON%2BrvTc8OZ5Dyzzr7nXwOANHCgh5F8b0dRoCiYRHRmWA6ZmM5WOLUREwtukVy8piLqX0dp%2Brncm%2F4EdD7f4PBZI1G3o7hDKjfD5Pzj7gvbDQm4bJf%2FZ6vWRkRRGTyJMS2iEOSg4wKpuGO1S%2B8GpoeSH67jdWwTxXzCh%2BaDPBjqkAeTObOCGD5CLsh7ZZi2pZkEvAv6X5Tj99etyEv3DNfdpPQPX8lCc0WXybAbbOiJI7mTwi%2BNv93qd5gHTWaJyUQcMxxwD18PWCu5ncCrD5sYRUHUENKUopKWEIrJ9BJHMMj%2FyRz12S01d2t2IciTXk1qCtCZ3PqhFSt%2FwdWNcR6zdnQ7V%2FCO97EOMhpZ9k69LszYFKOPCglfT4w%2BrEg%2Fpt9DeJ%2B3i&X-Amz-Signature=b07237ddba1daeea0e87ee5649b2e9466e12090652528742e0cab61c2a8fd0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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