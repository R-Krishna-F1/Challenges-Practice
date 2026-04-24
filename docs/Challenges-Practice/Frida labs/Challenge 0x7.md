<empty-block/>
The challenge is similar 0x6 but this time we have to pass the required values to get the flag as arguments of a function
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/14ee3c46-3d8d-492f-ae9c-bb0d807a780e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPYGVDQ%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlufqMs69YUdiTshdvaXNaMnPy6fMxFIyxtqDnE0viugIhAPA47oru8GlOIz0HC5h0Y%2F7r1eWldx0EGizaC3a6HMp%2FKv8DCHIQABoMNjM3NDIzMTgzODA1Igy3dy48xlggEh2bWF0q3ANBPI%2FTuhQjplGZZIttsG%2FCtaBj1Dlfw8ETlZU9vJIbZTZQGCHh10TNXP0nZewsWqKScjcS55cLhEkPTCkzNyftHLIPh73RgzHRBEGNG50Aaq9YRTsyXifmW8AK3iIR0pYB0kTrNoZKzsp2PR%2BSm8ZF1eD9W5rVr1LDG8pM1GIz915xa7KnFqP3A61sthpXhkE0CsufUsa2TGIhuUTf%2BF89h%2F4WtAJKw2SOEReLKm9YBI724p1MyThSfEiOPlrfDVsAlxvPn%2F8uJNpXHnvnwDv08p2jvZj5oiLRagPtGFc5yNHSG21nE3no5oPhzJ97R2ISUU6R3eU4RtURhuU7fkK3MCsgM6fw3OKlMdRE7DJETdCGIx5d0nAOTWRRTvItippYON8QRp6x9Yb8fTawSCOS%2BHpp9%2Fx%2BuiDnfOsvO%2FdWpDqfK4hJW%2F8dVgT0iiplVoXhc31yNpBC7GFurKuSo8TaRBAoOcH2ShmK2DlqOqJJmqGu7slcNuQnKdbaxRmX%2FQTQUp81%2BDzfSOKVvZWxoaCAwunUzjidZ7R9T2ul4TMaf7Z7U1UlHmdLfTqNYXXFDbFYr%2BJy6cSWUpbQhCMZceeWcRsjG34sTA3HIrYA8juy3zEznqwi8CgRBN2fxDCY9qrPBjqkAZnv3BiDTR9tRJRj0%2BIMxb3m9x3V3n%2Biuo%2Byc9fDE5B0lrHjtT6DRBm7sFebwsNR7xqRKcRZqvzEDLy7737%2B9ZX1nRAn%2FP3CJ1kdEIfkQshHDE4f1xeE262fiaF4G6oZ819GUYzAA4JXISyaOIiH4iQOaqfrflOz8ITrfbMTR%2BJq5Qe7gdr4PxpA8Q8XoeRyVBb1hAuyJj5AYv80FN%2BTKmk%2Bqpy1&X-Amz-Signature=89b50268285be375a8ee9d966f95255d67d156ea5cab67b350375e9a73a16e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
checker class
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/72855c78-ef38-4506-827e-e98e4d9b96cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPYGVDQ%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlufqMs69YUdiTshdvaXNaMnPy6fMxFIyxtqDnE0viugIhAPA47oru8GlOIz0HC5h0Y%2F7r1eWldx0EGizaC3a6HMp%2FKv8DCHIQABoMNjM3NDIzMTgzODA1Igy3dy48xlggEh2bWF0q3ANBPI%2FTuhQjplGZZIttsG%2FCtaBj1Dlfw8ETlZU9vJIbZTZQGCHh10TNXP0nZewsWqKScjcS55cLhEkPTCkzNyftHLIPh73RgzHRBEGNG50Aaq9YRTsyXifmW8AK3iIR0pYB0kTrNoZKzsp2PR%2BSm8ZF1eD9W5rVr1LDG8pM1GIz915xa7KnFqP3A61sthpXhkE0CsufUsa2TGIhuUTf%2BF89h%2F4WtAJKw2SOEReLKm9YBI724p1MyThSfEiOPlrfDVsAlxvPn%2F8uJNpXHnvnwDv08p2jvZj5oiLRagPtGFc5yNHSG21nE3no5oPhzJ97R2ISUU6R3eU4RtURhuU7fkK3MCsgM6fw3OKlMdRE7DJETdCGIx5d0nAOTWRRTvItippYON8QRp6x9Yb8fTawSCOS%2BHpp9%2Fx%2BuiDnfOsvO%2FdWpDqfK4hJW%2F8dVgT0iiplVoXhc31yNpBC7GFurKuSo8TaRBAoOcH2ShmK2DlqOqJJmqGu7slcNuQnKdbaxRmX%2FQTQUp81%2BDzfSOKVvZWxoaCAwunUzjidZ7R9T2ul4TMaf7Z7U1UlHmdLfTqNYXXFDbFYr%2BJy6cSWUpbQhCMZceeWcRsjG34sTA3HIrYA8juy3zEznqwi8CgRBN2fxDCY9qrPBjqkAZnv3BiDTR9tRJRj0%2BIMxb3m9x3V3n%2Biuo%2Byc9fDE5B0lrHjtT6DRBm7sFebwsNR7xqRKcRZqvzEDLy7737%2B9ZX1nRAn%2FP3CJ1kdEIfkQshHDE4f1xeE262fiaF4G6oZ819GUYzAA4JXISyaOIiH4iQOaqfrflOz8ITrfbMTR%2BJq5Qe7gdr4PxpA8Q8XoeRyVBb1hAuyJj5AYv80FN%2BTKmk%2Bqpy1&X-Amz-Signature=39b8a5ce94989534ba08429f32206dddaa7bc3186624f80186f88ee1f765b6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
There are 2 methods to solve this challenge
### Method1:- passing the required arguments
```javascript
Java.performNow(function() {
  Java.choose('com.ad2001.frida0x7.MainActivity', {
    onMatch: function(instance) {
    console.log("Instance found");
    var checker = Java.use("com.ad2001.frida0x7.Checker");
    var checker_obj  = checker.$new(600, 600);
    instance.flag(checker_obj);
  },
    onComplete: function() {}
  });
});
```
### Method2:- Hooking the constructor class
<empty-block/>