import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))
  
export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}))

export const BattleMonsterContainer = styled("div")(() => ({
    borderTop: "1px solid",
    borderTopColor: "rgba(0,0,0,0.1)",
    padding: "10px 0 12px"
}))

export const Image = styled.img(() => ({
    borderRadius: '7px',
    width: '100%',
    height: '178px',
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.1)',
  }))

export const BattleMonsterLabel = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    margin: "5px 0 7px"
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    display: "block",
    height: 8,
    width: "100%",
    borderRadius: 15,
    transition: 'all .2s ease-in-out',
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.1)',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));