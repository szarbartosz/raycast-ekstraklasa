import { ActionPanel, Action, List, Icon, Color } from "@raycast/api";
import useTable from "./hooks/useTable";

export default function Command() {
  const standings = useTable();

  // const accessories = useMemo(() => {
  //   standings?.map((team) => [
  // }, []);

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
            { icon: Icon.SoccerBall, text: team.gamesPlayed.toString(), tooltip: "Games Played" },
            {
              icon: Icon.Goal,
              text: `${team.goalsFor.toString()} - ${team.goalsAgainst.toString()}`,
              tooltip: "Goals For - Goals Against",
            },
            ...team.lastResults.map((result) => ({
              icon: {
                source: Icon.CircleFilled,
                tintColor: result === 0 ? Color.Red : result === 1 ? Color.SecondaryText : Color.Green,
              },
              tooltip: result === 0 ? "Lost" : result === 1 ? "Draw" : "Won",
            })),
            { icon: Icon.Trophy, text: team.teamPoints.toString(), tooltip: "Points" },
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
