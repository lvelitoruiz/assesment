import { useEffect, useState } from "react"
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterLabel, BattleMonsterTitle, ProgressBar, Image, BattleMonsterContainer } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {

    const [isCentered,setCentered] = useState(true);

    useEffect( () => {
        if(title !== "Player" && title !== "Computer") {
            setCentered(false);
        }
    },[title])

    return (
        <BattleMonsterCard centralized={isCentered}>
            {
                (monster !== null && monster !== undefined) ?
                <>
                    <Image src={monster.imageUrl} />
                </> : <></>
            }
            <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            {
                (monster !== null && monster !== undefined) ?
                <BattleMonsterContainer>
                    <BattleMonsterLabel>HP</BattleMonsterLabel>
                    <ProgressBar color="primary" variant="determinate" value={monster.hp}></ProgressBar>
                    <BattleMonsterLabel>Attack</BattleMonsterLabel>
                    <ProgressBar color="primary" variant="determinate" value={monster.attack}></ProgressBar>
                    <BattleMonsterLabel>Defense</BattleMonsterLabel>
                    <ProgressBar color="primary" variant="determinate" value={monster.defense}></ProgressBar>
                    <BattleMonsterLabel>Speed</BattleMonsterLabel>
                    <ProgressBar color="primary" variant="determinate" value={monster.speed}></ProgressBar>
                </BattleMonsterContainer> : <></>
            }
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }