export interface ValorantAgentRoleDto {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface ValorantAgentBriefDto {
  uuid: string;
  displayName: string;
  fullPortrait: string;
  role: ValorantAgentRoleDto | null;
}

export interface ValorantAgentsApiDto {
  data: ValorantAgentBriefDto[];
}

export interface AgentRoleSectionViewModel {
  key: string;
  title: string;
  description: string;
  roleIcon: string;
  agents: ValorantAgentBriefDto[];
}

const ROLE_ORDER: readonly string[] = [
  'dbe8757e-9e92-4ed4-b39f-9dfc589691d4',
  '1b47567f-8f7b-444b-aae3-b0c634622d10',
  '4ee40330-ecdd-4f2f-98a8-eb1243428373',
  '5fc02f99-4091-4486-a531-98459a3e95e9',
];

function pushSectionFromRoleUuid(
  roleUuid: string,
  byRole: Map<string, ValorantAgentBriefDto[]>,
  out: AgentRoleSectionViewModel[]
): void {
  const list = byRole.get(roleUuid);
  if (!list || list.length === 0) {
    return;
  }
  const sample = list[0].role;
  if (!sample) {
    return;
  }
  out.push({
    key: roleUuid,
    title: sample.displayName,
    description: sample.description,
    roleIcon: sample.displayIcon,
    agents: list,
  });
  byRole.delete(roleUuid);
}

export function buildAgentRoleSections(agents: ValorantAgentBriefDto[]): AgentRoleSectionViewModel[] {
  const byRole = new Map<string, ValorantAgentBriefDto[]>();
  for (const agent of agents) {
    if (!agent.role) {
      continue;
    }
    const id = agent.role.uuid;
    const bucket = byRole.get(id);
    if (bucket) {
      bucket.push(agent);
      continue;
    }
    byRole.set(id, [agent]);
  }
  for (const list of byRole.values()) {
    list.sort((a, b) => a.displayName.localeCompare(b.displayName, 'en'));
  }
  const out: AgentRoleSectionViewModel[] = [];
  for (const roleUuid of ROLE_ORDER) {
    pushSectionFromRoleUuid(roleUuid, byRole, out);
  }
  const remainingKeys = [...byRole.keys()].sort();
  for (const roleUuid of remainingKeys) {
    pushSectionFromRoleUuid(roleUuid, byRole, out);
  }
  return out;
}
