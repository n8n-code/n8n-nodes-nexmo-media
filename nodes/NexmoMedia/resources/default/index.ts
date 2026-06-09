import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "List And Search Media Items",
					"value": "List And Search Media Items",
					"action": "List and search media items",
					"description": "Retrieve information about multiple media items with the ability to search and paginate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				},
				{
					"name": "Delete A Media Item",
					"value": "Delete A Media Item",
					"action": "Delete a media item",
					"description": "Delete a previously created media item by ID.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/:id"
						}
					}
				},
				{
					"name": "Retrieve A Media Item",
					"value": "Retrieve A Media Item",
					"action": "Retrieve a media item",
					"description": "Retrieve information about a single media item",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/:id/info"
						}
					}
				},
				{
					"name": "Update A Media Item",
					"value": "Update A Media Item",
					"action": "Update a media item",
					"description": "Update a previously created media item by ID.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/:id/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "The order of search results.",
			"default": "ascending",
			"type": "options",
			"options": [
				{
					"name": "Ascending",
					"value": "ascending"
				},
				{
					"name": "Descending",
					"value": "descending"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "Page Index",
			"name": "page_index",
			"description": "Which page to retrieve in pagination",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_index",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "How many items at most per page",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "start_time",
			"description": "Retrieve results created on or after this timestap.",
			"default": "2020-01-01T14:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "end_time",
			"description": "Retrieve results created on or before this timestamp.",
			"default": "2020-01-01T14:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List And Search Media Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /:id",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete A Media Item"
					]
				}
			}
		},
		{
			"displayName": "GET /:id/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Retrieve A Media Item"
					]
				}
			}
		},
		{
			"displayName": "PUT /:id/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Media Item"
					]
				}
			}
		},
		{
			"displayName": "PUT /:id/info<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update A Media Item"
					]
				}
			}
		},
];
