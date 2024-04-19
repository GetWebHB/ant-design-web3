// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/usdc-filled.svg';

/**![UsdcFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dXNkLWNvaW4tdXNkYy1sb2dvX0ZpbGxlZDwvdGl0bGU+CiAgICA8ZyBpZD0idXNkLWNvaW4tdXNkYy1sb2dvX0ZpbGxlZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InVzZC1jb2luLXVzZGMtbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLCAxMjkpIiBmaWxsPSIjNTU1NTU1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQ2LjI2OTkxMSw0NjEuMDg1MjkxIEM1NDYuMjY5OTExLDM4My41IDQ5OS43Mjk0ODUsMzU2Ljg5ODcyMSA0MDYuNjQ4NjMyLDM0NS44MTY2MjggQzM0MC4xNjIzMDksMzM2Ljk0Nzc2MiAzMjYuODY1MDQ0LDMxOS4yMTUzNDkgMzI2Ljg2NTA0NCwyODguMTc2OTc3IEMzMjYuODY1MDQ0LDI1Ny4xMzg2MDQgMzQ5LjAyODkyNSwyMzcuMTkyOTY1IDM5My4zNTEzNjgsMjM3LjE5Mjk2NSBDNDMzLjI0MzE2MiwyMzcuMTkyOTY1IDQ1NS40MDcwNDIsMjUwLjQ5MzYwNSA0NjYuNDg2MzIzLDI4My43NDUyMDMgQzQ2OC43MDQzMDcsMjkwLjM5NTUyMyA0NzUuMzUyOTM5LDI5NC44MjcyOTYgNDgyLjAwMTU3MiwyOTQuODI3Mjk2IEw1MTcuNDU3Mzk4LDI5NC44MjcyOTYgQzUyNi4zMjQwMTQsMjk0LjgyNzI5NiA1MzIuOTcyNjQ3LDI4OC4xNzY5NzcgNTMyLjk3MjY0NywyNzkuMzEzNDMgTDUzMi45NzI2NDcsMjc3LjA5NDg4NCBDNTI0LjEwNjAzMSwyMjguMzI0MDk5IDQ4NC4yMTQyMzcsMTkwLjY0MDcyNyA0MzMuMjQzMTYyLDE4Ni4yMDg5NTQgTDQzMy4yNDMxNjIsMTMzLjAwNjM5NSBDNDMzLjI0MzE2MiwxMjQuMTM3NTI5IDQyNi41OTQ1MjksMTE3LjQ4NzIwOSA0MTUuNTE1MjQ4LDExNS4yNjg2NjMgTDM4Mi4yNzIwODcsMTE1LjI2ODY2MyBDMzczLjQwNTQ3MSwxMTUuMjY4NjYzIDM2Ni43NTY4MzgsMTIxLjkxODk4MiAzNjQuNTM4ODU1LDEzMy4wMDYzOTUgTDM2NC41Mzg4NTUsMTgzLjk5MDQwNyBDMjk4LjA1MjUzMSwxOTIuODU5MjczIDI1NS45NDgwNzIsMjM3LjE5Mjk2NSAyNTUuOTQ4MDcyLDI5Mi42MTQwNyBDMjU1Ljk0ODA3MiwzNjUuNzY3NTg3IDMwMC4yNzA1MTUsMzk0LjU4MjA5MyAzOTMuMzUxMzY4LDQwNS42Njk1MDYgQzQ1NS40MDcwNDIsNDE2Ljc1MTU5OSA0NzUuMzUyOTM5LDQzMC4wNTIyMzggNDc1LjM1MjkzOSw0NjUuNTIyMzg0IEM0NzUuMzUyOTM5LDUwMC45OTI1MjkgNDQ0LjMyMjQ0Myw1MjUuMzc1MjYyIDQwMi4yMTc5ODQsNTI1LjM3NTI2MiBDMzQ0LjU5Mjk1OCw1MjUuMzc1MjYyIDMyNC42NDcwNjEsNTAwLjk4NzIwOSAzMTcuOTk4NDI4LDQ2Ny43MzU2MSBDMzE1Ljc4NTc2Myw0NTguODcyMDY0IDMwOS4xMzcxMzEsNDU0LjQzNDk3MSAzMDIuNDg4NDk5LDQ1NC40MzQ5NzEgTDI2NC44MDkzNyw0NTQuNDM0OTcxIEMyNTUuOTQ4MDcyLDQ1NC40MzQ5NzEgMjQ5LjI5OTQ0LDQ2MS4wODUyOTEgMjQ5LjI5OTQ0LDQ2OS45NTQxNTcgTDI0OS4yOTk0NCw0NzIuMTcyNzA0IEMyNTguMTYwNzM3LDUyNy41ODg0ODggMjkzLjYyMTg4Myw1NjcuNDkwNDA3IDM2Ni43NTY4MzgsNTc4LjU3NzgyIEwzNjYuNzU2ODM4LDYzMS43ODAzNzggQzM2Ni43NTY4MzgsNjQwLjY0MzkyNCAzNzMuNDA1NDcxLDY0Ny4yOTQyNDQgMzg0LjQ4NDc1Miw2NDkuNTEyNzkxIEw0MTcuNzI3OTEzLDY0OS41MTI3OTEgQzQyNi41OTQ1MjksNjQ5LjUxMjc5MSA0MzMuMjQzMTYyLDY0Mi44NjI0NzEgNDM1LjQ2MTE0NSw2MzEuNzgwMzc4IEw0MzUuNDYxMTQ1LDU3OC41Nzc4MiBDNTAxLjk0NzQ2OSw1NjcuNDkwNDA3IDU0Ni4yNjk5MTEsNTIwLjkzODE2OSA1NDYuMjY5OTExLDQ2MS4wODUyOTEgTDU0Ni4yNjk5MTEsNDYxLjA4NTI5MSBaIiBpZD0i6Lev5b6EIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yODYuOTczMjUsNjkzLjg0NjQ4MyBDMTE0LjEwODgxLDYzMS43ODAzNzggMjUuNDU4NjA1Nyw0MzguOTIxMTA1IDg5LjczMjI2NDIsMjY4LjIyNjAxNyBDMTIyLjk3NTQyNiwxNzUuMTIxNTQgMTk2LjExMDM4MSwxMDQuMTg2NTcgMjg2Ljk3MzI1LDcwLjkzNDk3MDggQzI5NS44Mzk4NjYsNjYuNTAzMTk3NyAzMDAuMjcwNTE1LDU5Ljg1Mjg3NzkgMzAwLjI3MDUxNSw0OC43NjU0NjQ4IEwzMDAuMjcwNTE1LDE3LjczMjQxMjYgQzMwMC4yNzA1MTUsOC44NjM1NDYxOSAyOTUuODM5ODY2LDIuMjEzMjI2NDIgMjg2Ljk3MzI1LDAgQzI4NC43NTUyNjcsMCAyODAuMzI0NjE4LDAgMjc4LjEwNjYzNCwyLjIxMzIyNjQyIEM2Ny41NjgzODM0LDY4LjcxNjQyNDEgLTQ3LjY3NjM0OTksMjkyLjYxNDA3IDE4LjgwOTk3MzQsNTAzLjIwNTc1NiBDNTguNzAxNzY3NCw2MjcuMzQzMjg1IDE1NC4wMDA2MDQsNzIyLjY2NjMwOCAyNzguMTA2NjM0LDc2Mi41NjgyMjcgQzI4Ni45NzMyNSw3NjcgMjk1LjgzOTg2Niw3NjIuNTY4MjI3IDI5OC4wNTI1MzEsNzUzLjY5OTM2IEMzMDAuMjcwNTE1LDc1MS40ODYxMzQgMzAwLjI3MDUxNSw3NDkuMjY3NTg3IDMwMC4yNzA1MTUsNzQ0LjgzNTgxNCBMMzAwLjI3MDUxNSw3MTMuNzk3NDQyIEMzMDAuMjcwNTE1LDcwNy4xNDcxMjIgMjkzLjYyMTg4Myw2OTguMjgzNTc2IDI4Ni45NzMyNSw2OTMuODQ2NDgzIFogTTUyMS44OTMzNjYsMi4yMTMyMjY0MiBDNTEzLjAyNjc1LC0yLjIxODU0NjY4IDUwNC4xNjAxMzQsMi4yMTMyMjY0MiA1MDEuOTQ3NDY5LDExLjA4MjA5MjkgQzQ5OS43Mjk0ODUsMTMuMzAwNjM5NSA0OTkuNzI5NDg1LDE1LjUxMzg2NiA0OTkuNzI5NDg1LDE5Ljk1MDk1OTMgTDQ5OS43Mjk0ODUsNTAuOTg0MDExNSBDNDk5LjcyOTQ4NSw1OS44NTI4Nzc5IDUwNi4zNzgxMTcsNjguNzE2NDI0MSA1MTMuMDI2NzUsNzMuMTUzNTE3NSBDNjg1Ljg5MTE5LDEzNS4yMTk2MjIgNzc0LjU0MTM5NCwzMjguMDc4ODk1IDcxMC4yNjc3MzYsNDk4Ljc3Mzk4MyBDNjc3LjAyNDU3NCw1OTEuODc4NDYgNjAzLjg4OTYxOSw2NjIuODEzNDMgNTEzLjAyNjc1LDY5Ni4wNjUwMjkgQzUwNC4xNjAxMzQsNzAwLjQ5NjgwMiA0OTkuNzI5NDg1LDcwNy4xNDcxMjIgNDk5LjcyOTQ4NSw3MTguMjM0NTM1IEw0OTkuNzI5NDg1LDc0OS4yNjc1ODcgQzQ5OS43Mjk0ODUsNzU4LjEzNjQ1NCA1MDQuMTYwMTM0LDc2NC43ODY3NzQgNTEzLjAyNjc1LDc2NyBDNTE1LjI0NDczMyw3NjcgNTE5LjY3NTM4Miw3NjcgNTIxLjg5MzM2Niw3NjQuNzg2Nzc0IEM3MzIuNDMxNjE3LDY5OC4yODM1NzYgODQ3LjY3NjM1LDQ3NC4zODU5MyA3ODEuMTkwMDI3LDI2My43OTQyNDQgQzc0MS4yOTgyMzMsMTM3LjQzODE2OSA2NDMuNzgxNDEzLDQyLjExNTE0NSA1MjEuODkzMzY2LDIuMjEzMjI2NDIgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const UsdcFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-usdc-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

UsdcFilled.displayName = 'UsdcFilled';
