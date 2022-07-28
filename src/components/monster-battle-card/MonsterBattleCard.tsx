import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
    return (
        <BattleMonsterCard center={true}>
            <BattleMonsterTitle>{title!}</BattleMonsterTitle>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }