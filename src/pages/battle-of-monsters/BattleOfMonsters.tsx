import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { Monster } from "../../models/interfaces/monster.interface"
import { MonsterService } from "../../reducers/monsters/monsters.service"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const [cpuMonster, setCpuMonster] = useState<Monster | null>(null)
    const [winner, setWinner] = useState<Monster | null>(null)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    const handleStartBattleClick = async () => {
        if (selectedMonster !== null && cpuMonster !== null) {
            const winMonster = await MonsterService.getWinner(selectedMonster?.id, cpuMonster.id);
            setWinner(winMonster)
        }
    }

    useEffect(() => {
        if (selectedMonster !== null && selectedMonster !== undefined) {
            const monstersFiltered = monsters.filter((item) => item.id !== selectedMonster.id);
            const randomIndex = Math.floor(Math.random() * monstersFiltered.length);
            setCpuMonster(monstersFiltered[randomIndex]);
        }
    }, [selectedMonster]);

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />
            {
                (winner !== null) ?
                    <WinnerDisplay data-testid="winner-display" text={winner.name} /> : ""
            }
            <BattleSection>
                <MonsterBattleCard title={selectedMonster?.name || "Player"} monster={selectedMonster || null}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button" disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title={cpuMonster?.name || "Computer"} monster={cpuMonster || null}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }