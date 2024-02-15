import { ActionPanel, Action, List, Icon, Color } from "@raycast/api";
import useTable from "./hooks/useTable";

export default function Command() {
  const standings = useTable();

  return (
    <List throttle isLoading={!standings}>
      {standings?.map((team) => (
        <List.Item
          key={team.position}
          icon={team.logoUrl}
          title={team.position.toString()}
          subtitle={team.teamName}
          keywords={[team.teamName]}
          accessories={[
            { icon: Icon.SoccerBall, text: team.gamesPlayed.toString() },
            { icon: Icon.Goal, text: `${team.goalsFor.toString()} - ${team.goalsAgainst.toString()}` },
            ...team.lastResults.reverse().map((result) => ({
              icon: {
                source: Icon.CircleFilled,
                tintColor: result === 0 ? Color.Red : result === 1 ? Color.SecondaryText : Color.Green,
              },
            })),
            { icon: Icon.LineChart, text: team.teamPoints.toString() },
          ]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={team.teamName} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
