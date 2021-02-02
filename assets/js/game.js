var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roboto", "Amy Droid", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose.");
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // if player picks "skip" confirm and then stop the loop
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
        );
        // if player choses to fight, fight
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }



        if (promptFight === "fight" || promptFight === "FIGHT") {
        };
        for (var i = 0; i, enemyNames.length; i++) {
            console.log(enemyNames[i]);
            console.log(i);
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "attacked " + enemyName + ". " + enemyName + "now has" + enemyHealth + " health remaining."
        );
        // check enemy's health

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + "still has " + playerHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked" + playerName + ". " + playerName + "now has" + playerHealth + " health remaining."
        );
        if (playerHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
//if no (false), ask question again by running fight() again
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

        var pickedEnemyName = enemyNames[i];
        debugger;

        fight(pickedEnemyName);
    }
    else {
        window.alert('You have lost your robot in battle!" Game Over!');
    }
}