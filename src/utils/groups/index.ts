import { Allowed, ChecksInput, Grid } from "../../types";
import { findIslands } from "../findIslands";

export const getFields = (grid: Grid, allowedClasses: Allowed) =>
  findIslands(grid, allowedClasses);

export const allowedGroupsConfig = {
  publicGroup: {
    private: false,
    public: true,
    body: true,
    limb: true,
    floor: false,
  },
  publicBody: {
    private: false,
    public: true,
    body: true,
    limb: false,
    floor: false,
  },
  publicLimb: {
    private: false,
    public: true,
    body: false,
    limb: true,
    floor: false,
  },
  privateGroup: {
    private: true,
    public: false,
    body: true,
    limb: true,
    floor: false,
  },
  privateBody: {
    private: true,
    public: false,
    body: true,
    limb: false,
    floor: false,
  },
  privateLimb: {
    private: true,
    public: false,
    body: false,
    limb: true,
    floor: false,
  },
  floor: {
    private: false,
    public: false,
    body: false,
    limb: false,
    floor: true,
  },
};

type Config = {
  required: Allowed;
  outcome: (checks: ChecksInput) => boolean;
};

export const config: Config[] = [
  {
    required: allowedGroupsConfig.publicGroup,
    outcome: (checks) => !checks.hole,
  },
  {
    required: allowedGroupsConfig.publicBody,
    outcome: (checks) => !checks.hole && !checks.diagonal,
  },
  {
    required: allowedGroupsConfig.publicLimb,
    outcome: (checks) => !checks.hole && checks.diagonal,
  },
  {
    required: allowedGroupsConfig.privateGroup,
    outcome: (checks) => !checks.hole && checks.same,
  },
  {
    required: allowedGroupsConfig.privateBody,
    outcome: (checks) => !checks.hole && checks.same && checks.perpendicular,
  },
  {
    required: allowedGroupsConfig.privateLimb,
    outcome: (checks) => !checks.hole && checks.same && checks.diagonal,
  },
  {
    required: allowedGroupsConfig.floor,
    outcome: (checks) => checks.hole,
  },
];
