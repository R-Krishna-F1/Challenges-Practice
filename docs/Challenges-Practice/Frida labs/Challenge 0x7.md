<empty-block/>
The challenge is similar 0x6 but this time we have to pass the required values to get the flag as arguments of a function
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/14ee3c46-3d8d-492f-ae9c-bb0d807a780e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3HCUVE%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3S02NVIhcQHrzYpXavqY7HRgFA1KHFvswVJMDDHJ82AiAb%2FB7r%2BEzeMyeyxQYuwUFhR51LrRVdFluol1MBvNvE3Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMaFn4gkrI2%2FrYvfcHKtwDGYQHgY2Z0X%2BLmN5lShz4xq32RWBZl70G3iq9nYAYMPKUUDXgSI%2BzcvZzXZvdPqEP9SkfdqEvQkD%2FPmyQlwoTUG%2FbKIbSMSKlMorntj%2F0OHcgsQz7pCFiezkUdza%2FZPAy3SVoGK2iOZymGTQXt254zzueXjLtimiJFK4Dg8mSikDovMzr2U3Bl2NF9v7%2FQLgbvHyzriUxEbdeosQxTY4EVznU%2BrJittgMDWe88m7UTzDd7PsdvKcjjR8CscrqlegLq0DtOealHZUS893MluXgnrhD%2F6ZlS2gpVcmuFes%2F8e6NPjy9FspcHQm3NANN0XF0jAyzZ1nwXsUuTZAniMc8F%2FMMNCZPKuzC%2FN31u4Zm6%2FvgY6mNLgXMFQN2RU6MJfHabkwWEB3s0T1r%2BEHmtNDXRsANYur6McEoBFkOt3S9Iq3d21dh5%2FMEO8VrNWeA6rVlijOvrwDLqNPnhWin96Q6iJex54Gk6759MYUxRNS8%2F0%2BlUpuhtIcAXdalRzupUjh2%2FFFMY%2F7vHrHQoA2kw5lSUgf8hspHQjfnnWCSJKUU51Bht6qdYZox8qHK87LCwWPeqYEQjVba6ElwJsawytbpPMoTX%2BQYjAO0NOdXS1jkPaaiDJ1C2j742XTklB0wmZ%2BmzwY6pgF%2BROVlDBtAIUVRDCoNUQPJm4scTJwlMD9r9fV4x6fritsOoBD7YEjvR%2BEHtX21h6SJFU8iyK%2FFPe3uH8UeCMsD1HgyRV2kJ7bTOUabiCvRHLSp1EAKyQAurjqsec5tx62O9315dhF9hqZ9rL237c1Hl%2BIJqqnFqNRY5WTICeA9XRdYp4kLeOXbAw%2FmcbDcHiL9Q%2BYv3t%2FiVJZV%2BKyaD6UCOzEjqUJM&X-Amz-Signature=db2eed89a26f563be6df2f3a9468a22becafb6c374f59decf1dd772e55c21fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
checker class
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/72855c78-ef38-4506-827e-e98e4d9b96cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3HCUVE%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3S02NVIhcQHrzYpXavqY7HRgFA1KHFvswVJMDDHJ82AiAb%2FB7r%2BEzeMyeyxQYuwUFhR51LrRVdFluol1MBvNvE3Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMaFn4gkrI2%2FrYvfcHKtwDGYQHgY2Z0X%2BLmN5lShz4xq32RWBZl70G3iq9nYAYMPKUUDXgSI%2BzcvZzXZvdPqEP9SkfdqEvQkD%2FPmyQlwoTUG%2FbKIbSMSKlMorntj%2F0OHcgsQz7pCFiezkUdza%2FZPAy3SVoGK2iOZymGTQXt254zzueXjLtimiJFK4Dg8mSikDovMzr2U3Bl2NF9v7%2FQLgbvHyzriUxEbdeosQxTY4EVznU%2BrJittgMDWe88m7UTzDd7PsdvKcjjR8CscrqlegLq0DtOealHZUS893MluXgnrhD%2F6ZlS2gpVcmuFes%2F8e6NPjy9FspcHQm3NANN0XF0jAyzZ1nwXsUuTZAniMc8F%2FMMNCZPKuzC%2FN31u4Zm6%2FvgY6mNLgXMFQN2RU6MJfHabkwWEB3s0T1r%2BEHmtNDXRsANYur6McEoBFkOt3S9Iq3d21dh5%2FMEO8VrNWeA6rVlijOvrwDLqNPnhWin96Q6iJex54Gk6759MYUxRNS8%2F0%2BlUpuhtIcAXdalRzupUjh2%2FFFMY%2F7vHrHQoA2kw5lSUgf8hspHQjfnnWCSJKUU51Bht6qdYZox8qHK87LCwWPeqYEQjVba6ElwJsawytbpPMoTX%2BQYjAO0NOdXS1jkPaaiDJ1C2j742XTklB0wmZ%2BmzwY6pgF%2BROVlDBtAIUVRDCoNUQPJm4scTJwlMD9r9fV4x6fritsOoBD7YEjvR%2BEHtX21h6SJFU8iyK%2FFPe3uH8UeCMsD1HgyRV2kJ7bTOUabiCvRHLSp1EAKyQAurjqsec5tx62O9315dhF9hqZ9rL237c1Hl%2BIJqqnFqNRY5WTICeA9XRdYp4kLeOXbAw%2FmcbDcHiL9Q%2BYv3t%2FiVJZV%2BKyaD6UCOzEjqUJM&X-Amz-Signature=e211a4221af2387abe6f4e516bade80b5b93aa249a5600db2535572bccff79ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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