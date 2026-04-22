<empty-block/>
The challenge is similar 0x6 but this time we have to pass the required values to get the flag as arguments of a function
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/14ee3c46-3d8d-492f-ae9c-bb0d807a780e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDVSKQ4%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T045054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHLMQlGUD0eNriitYeExJ7Yb%2FXjSRqoVw6qUkXXmvj8uAiEA2yeh1tEcA0h%2Fc%2FSNLMVNYFoqRgCU3HNWuj46xjs5%2ByIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCTBaPOS%2FL6awAJmbircA38C%2FKfh14vXdARCeZtlk28KE4A1B2epIzBx%2BxtnpIPs4JE2HhxZoRGl%2FdMOeZdAz2A%2Bl1jW2eoNoWoTyKRT5DxCOcjwWirFiv%2FGy4zrc1fgNB6Cq9JCnF7UvjhjG5lUbsr9MEVs2P05uhucnFR6AwtBJgGxWgEomfkgfvgaEM6lv0aoZTNk1Of5JFycWB%2FVxNyejNmJDcvofoQI%2F%2Fa068P2xSYxiK%2BuOYSRQGbwE4yLXrLgELp11qX3vQ%2Biyxp2YBdPr3G6ahFiywdpPWEb7WySaALMQ8NhlmeEAcpgh2gsQRdjejCw5X9YOL0HYiaeynD1dPbavQbctJwr6Imn4ASbHNvMfgidVlpUzR2svDzYwfY0GAQSNU4Ei8fUyGOnOwqY1EX%2BfDv7VGN8DdZwIMRWZTA1WdtH5y0kbImq7hW5d6u2F9sjalDUaF33nGOQgJydpgCtCrXyd1kPS3O0uy5ilixVRuj0Ot7TvaLwxK4yjDE7YIAqOnQcyl8SVIBUQ4FvpSOdGI4gDHw2STW794gaIBG6fCc6b9UlVn%2BJMx7CmwQocr8V10RzLnM9Z6zDpY2iVfWUdZo0iqjMUy1J1%2BPBOoxF6K6MyLV3UuFf0V%2Fk6QFj5Fryg48fGZ4bMMyBoc8GOqUBCsK2wKy7lsWu2jNty4kdC8PZjjQg5OKatSEp1ZwAxZY92RhAoL3Wkj8lvvlp0tl8CPYwHQQ6EE5jcUj%2FCSE%2FWBTier0xsb9hwm6WYfwrTI%2FAnzk7RShm%2FGRuC79lTGEzRczxYWAQaCxmVkmxgOZD2SPzl7JeJyTgtx1oHAjYk0yhs%2FUEQOTmqTkyhKNwr4A9hwY9uKsHU5u5%2Fk60Y1pFPaBxPJY8&X-Amz-Signature=3bfb8fb1cd84c59335fd3641417cd18b678a2f9dae90402f17b07a8548b1160f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
checker class
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/72855c78-ef38-4506-827e-e98e4d9b96cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDVSKQ4%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T045054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHLMQlGUD0eNriitYeExJ7Yb%2FXjSRqoVw6qUkXXmvj8uAiEA2yeh1tEcA0h%2Fc%2FSNLMVNYFoqRgCU3HNWuj46xjs5%2ByIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCTBaPOS%2FL6awAJmbircA38C%2FKfh14vXdARCeZtlk28KE4A1B2epIzBx%2BxtnpIPs4JE2HhxZoRGl%2FdMOeZdAz2A%2Bl1jW2eoNoWoTyKRT5DxCOcjwWirFiv%2FGy4zrc1fgNB6Cq9JCnF7UvjhjG5lUbsr9MEVs2P05uhucnFR6AwtBJgGxWgEomfkgfvgaEM6lv0aoZTNk1Of5JFycWB%2FVxNyejNmJDcvofoQI%2F%2Fa068P2xSYxiK%2BuOYSRQGbwE4yLXrLgELp11qX3vQ%2Biyxp2YBdPr3G6ahFiywdpPWEb7WySaALMQ8NhlmeEAcpgh2gsQRdjejCw5X9YOL0HYiaeynD1dPbavQbctJwr6Imn4ASbHNvMfgidVlpUzR2svDzYwfY0GAQSNU4Ei8fUyGOnOwqY1EX%2BfDv7VGN8DdZwIMRWZTA1WdtH5y0kbImq7hW5d6u2F9sjalDUaF33nGOQgJydpgCtCrXyd1kPS3O0uy5ilixVRuj0Ot7TvaLwxK4yjDE7YIAqOnQcyl8SVIBUQ4FvpSOdGI4gDHw2STW794gaIBG6fCc6b9UlVn%2BJMx7CmwQocr8V10RzLnM9Z6zDpY2iVfWUdZo0iqjMUy1J1%2BPBOoxF6K6MyLV3UuFf0V%2Fk6QFj5Fryg48fGZ4bMMyBoc8GOqUBCsK2wKy7lsWu2jNty4kdC8PZjjQg5OKatSEp1ZwAxZY92RhAoL3Wkj8lvvlp0tl8CPYwHQQ6EE5jcUj%2FCSE%2FWBTier0xsb9hwm6WYfwrTI%2FAnzk7RShm%2FGRuC79lTGEzRczxYWAQaCxmVkmxgOZD2SPzl7JeJyTgtx1oHAjYk0yhs%2FUEQOTmqTkyhKNwr4A9hwY9uKsHU5u5%2Fk60Y1pFPaBxPJY8&X-Amz-Signature=78ceff38ae265fb11bf4d3f84894f6813b728610f6f3fc7395a14e631b82f39e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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