### Flag 1
cloned the  repo into android studio using version control and inspected the code 
and made some changes in the code 
```java
public void onClick(View v) {
                counter++;
                text.setText("Counter: "+counter);
                if(counter>9999) {
                    startActivity(new Intent(MainActivity.this, ChallengeActivity.class));
                }
```
this is the original code snippet is the count reach 10000 then it starts the activity called challengeActivity so changing this code counter \> 1 will allow us to go to challenge activity
```java
findViewById(R.id.button1).setOnClickListener(failHandler);
        findViewById(R.id.button2).setOnClickListener(failHandler);
        findViewById(R.id.button3).setOnClickListener(failHandler);
        findViewById(R.id.button4).setOnClickListener(failHandler);
        findViewById(R.id.button5).setOnClickListener(failHandler);
        findViewById(R.id.button6).setOnClickListener(failHandler);
        findViewById(R.id.button7).setOnClickListener(failHandler);
        findViewById(R.id.button8).setOnClickListener(failHandler);
        findViewById(R.id.button9).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(ChallengeActivity.this, FlagActivity.class));
            }
```
the code tells us there are 9 button and clicking all other 8 button fails and the 9th button works which upon clicking it will take us to FlagActivity
<empty-block/>
```java
public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                text.setText("Read the code: "+progress+"%");
                progressTracking = progress;
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                // Success!!! Show the flag now!
                if(progressTracking==42) {
                    text.setText(decryptFlag());
                }
```
this code tells us if the progress bar is set to 42 percent then reveal the flag so setting it to exact 42 percent gives the flag HXT\{read-or-modify-sources-gha82f\}