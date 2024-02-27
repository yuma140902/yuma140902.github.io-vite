import { Dropdown } from 'react-daisyui';

export type ThemeId = 'onedark' | 'onelight';
export type Theme = { type: ThemeId; display: string };
export const themes: Theme[] = [
  { type: 'onedark', display: 'OneDark' },
  { type: 'onelight', display: 'OneLight' },
];

export function ThemeSelector() {
  return (
    <Dropdown className="bg-transparent" vertical="bottom" end>
      <Dropdown.Toggle className="group btn" button={false}>
        <span className="i-carbon-settings w-5 h-5 group-hover:animate-spin">
          設定
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-64">
        {themes.map((theme) => (
          <Dropdown.Item key={theme.type} data-set-theme={theme.type}>
            <span data-theme={theme.type} className="p-1">
              <span className="bg-primary text-primary-content">A</span>
              <span>bc</span>
            </span>
            {theme.display}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
