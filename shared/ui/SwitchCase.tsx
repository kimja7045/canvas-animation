import { ReactNode } from 'react';

type SwitchCaseProps<Case extends string | number> = {
  caseBy: Partial<Record<Case, ReactNode>>;
  value: Case | null;
  defaultComponent?: ReactNode;
};

/**
 * ### SwitchCase 컴포넌트
 * - switch-case 문을 컴포넌트 형식으로 이용할 수 있습니다.
 * - value props 를 맨 위로 올리는 것이 가독성에 좋습니다.
 * @example
 * ```tsx
 *  <SwitchCase
 *    value={value}
 *    caseBy={{
 *      case1: <Value1/>,
 *      case2: <Value2/>,
 *      case3: <Value3/>,
 *     }}
 *      defaultComponent={<Default/>}
 *     />
 *```
 * @ref `toss/slash`
 */
export const SwitchCase = <Case extends string | number>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchCaseProps<Case>) => {
  if (value === null) {
    return <>{defaultComponent}</>;
  }

  return <>{caseBy[value] ?? defaultComponent}</>;
};
