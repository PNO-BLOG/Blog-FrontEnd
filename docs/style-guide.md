# 스타일 작성 규칙

**작성자**: 오송주
**마지막 수정일**: 2025-07-04

---

### ▫️ Styled Component 네이밍 규칙에 대하여

- `PascalCase`를 기본 네이밍 규칙으로 사용한다
  예: `MainContainer`, `ProfileImage`, `TitleText`

---

### ▫️ CSS 속성 순서에 대하여

다음 순서로 배치함을 원칙으로 하며,
**우선순위가 같은경우 알파벳 사전순으로 배치**한다.

1. `margin` 관련 속성
2. `padding` 관련 속성
3. `position` 관련 속성 (`position`, `top`, `right` 등)
4. `flex` 속성들 (`flex-direction`, `justify-contents` 등)
5. 위치에 관련된 속성들 (`z-index`, `overflow` 등)
6. `width`
7. `height`
8. `font` 관련 속성 (`font-size`, `color` 등)
9. `background-color`
10. `background-image` 관련 속성
11. 시각/애니매이션 관련 속성 (`box-shadow`, `transition` 등)
12. 그외 속성들

---

### ▫️ 설치되어있는 글꼴 및 사용법

#### - 설치되어 있는 글꼴 목록

1. **ProtestRiot**
2. **SUIT Variable**

#### - 글꼴 사용법

1. **ProtestRiot**

   ```css
   font-family: "ProtestRiot";
   ```

2. **SUIT Variable**
   **font-wight 값에 따라 Thin(100) ~ Heavy(900) 값으로 설정** 가능

   ```css
   font-family: "SUIT";
   font-wight: 100; /* Thin */
   font-wight: 500; /* Medium */
   font-wight: 900; /* Heavy */
   ```

---

### ▫️ 색상에 관하여

프로젝트 내의 모든 색상은 `assets` > `style` > `color.ts` 에서 관리함을 원칙으로한다.
**컴포넌트 내에서 직접 Hex를 사용하거나 rgb를 사용하는것은 금지**한다.
색상 네이밍은 `camelCase`를 사용하며, **의미 중심 네이밍**을 할 수 있도록 한다.

|        색상명        | 색상코드 |          용도           |
| :------------------: | :------: | :---------------------: |
|     defaultWhite     | #FFFFFF  |  기본적인 하양색 색상   |
|     defaultWhite     | #000000  |  기본적인 검은색 색상   |
|   yellowHighlight    | #FFEE00  | 노란색 하이라이트 색상  |
|    greenHighlight    | #3FAB56  | 초록색 하이라이트 색상  |
|  categoryTextColor   | #E08B49  |  글 대분류 텍스트 색상  |
| descriptionTextColor | #787878  | 글 부가설명 텍스트 색상 |

---
