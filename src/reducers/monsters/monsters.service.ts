import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getWinner = async (battler1: string, battler2: string): Promise<Monster> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let battleObject = JSON.stringify({
    "monster1Id": battler1,
    "monster2Id": battler2
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: battleObject,
    redirect: 'follow' as RequestRedirect
  };

  let responseWinner = await fetch(`${API_URL}/battle`,requestOptions).then((response) => response.json());

  return responseWinner.winner;
}
  
export const MonsterService = {
  getAll, getWinner
};
