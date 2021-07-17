import { SchemaCollection, combineSchemas } from '@cypress/schema-tools'
import { User } from './users-response'
export const schemas: SchemaCollection = combineSchemas(User)