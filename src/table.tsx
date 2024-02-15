import { ActionPanel, Action, Icon, List } from "@raycast/api";
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
          accessories={[{ icon: Icon.Dot, text: team.teamPoints.toString() }]}
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
