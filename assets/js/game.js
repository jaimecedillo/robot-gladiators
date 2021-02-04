var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Droid", "Robo Trumble"]
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
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm) {
                shop();
            }
        }
        else {
            window.alert('You have lost your robot in battle!" Game Over!');
        }
    }
    // function to start new game 
    var startGame = function () {
        for (var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                window.alert('Welcome to Robot Gladiators! Round' + (i = 1));
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
            }
            else {
                window.alert('You have lost your robot in battle!" Game Over!');
                break;
            }
        }
        var startGame = function () {
            playerHealth = 100;
            playerAttack = 10;
            playerMoney = 10;
        }

        startGame();
        var endGame = function () {
            if (playerHealth > 0) {
                window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
            }
            window.alert("The game has now ended. Let's see how you did");
        }
    else {
        window.alert("You've lost your robot in battle.");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
};
switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
        if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }

        break;
    case "UPGRADE":
    case "upgrade":
        if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }

        break;
    case "LEAVE": // new case
    case "leave":
        window.alert("Leaving the store.");
        break;
    default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;

}
var (playAgainConfirm) {
    // restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}