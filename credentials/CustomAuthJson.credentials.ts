import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class CustomAuthJson implements ICredentialType {
    name = 'customAuthJson';
    displayName = 'Custom Authentication JSON';
    icon = 'file:mcpClient.svg' as const;
    properties: INodeProperties[] = [
        {
            displayName: 'Authentication JSON',
            name: 'authJson',
            type: 'json',
            default: '{}',
            description: 'Headers or tokens in JSON format to send with each request',
        },
    ];
}
