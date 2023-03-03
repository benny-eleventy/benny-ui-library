const fs = require("fs");

const componentName = process.argv[2];

if (!componentName) {
	console.log("Please provide a component name");
	process.exit(1);
}

const componentContent = (name) =>
	`import * as React from 'react';
    interface ${name}Props {
        // Add props here
    }

    const ${name} = (props: ${name}Props) => {
        return (
            <>
                <div>${name}</div>
            </>
        );
    };
    export { ${name} };
    export type { ${name}Props };
    export default ${name};
`;

const componentTestContent = (name) =>
	`import * as React from 'react';
import { render,fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import ${name} from './${name}';

describe('${name}', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<${name} />);
        expect(baseElement).toBeTruthy();
    });
});
`;

const componentStoryContent = (name) => `import * as React from 'react';
    import {ComponentStory, ComponentMeta} from '@storybook/react';
    import ${name} from './${name}';
    import type {${name}Props} from './${name}';

    export default {
        title: 'Components/${name}',
        component: ${name},
    } as ComponentMeta<typeof ${name}>;

    const Template: ComponentStory<typeof ${name}> = (args: ${name}Props) => <${name} {...args} />;
    export const Default = Template.bind({});
`;

const files = [
	{
		name: `${componentName}.tsx`,
		content: componentContent(componentName),
	},
	{
		name: `${componentName}.spec.tsx`,
		content: componentTestContent(componentName),
	},
	{
		name: `${componentName}.stories.tsx`,
		content: componentStoryContent(componentName),
	},
	{
		name: "index.ts",
		content: `export { default as ${componentName} } from './${componentName}';\n`,
	},
];

const packagePath = ".";

files.forEach((file) => {
	fs.writeFileSync(`${packagePath}/${file.name}`, file.content);
});
