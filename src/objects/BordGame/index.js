import CardGame from "../../components/CardGame";

function BordGame(amountCards) {
    const htmlCardGame = CardGame();
    const htmlBoardGame =  htmlCardGame.repeat(amountCards)

    return htmlBoardGame;
}

export default BordGame ;