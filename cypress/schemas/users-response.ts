import { ObjectSchema, versionSchemas, extend } from '@cypress/schema-tools'

const geo100: ObjectSchema = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  schema: {
    title: 'geo;',
    type: 'object',
    description: 'geo location',
    properties: {
      lat: {
        type: 'string',
        description: 'lattitude',
      },
      lng: {
        type: 'string',
        description: 'longtitude',
      }
    },
    required: true,
    additionalProperties: false,
  },
  example: {
    lat: "-37.3159",
    lng: "81.1496"
  }
}

const company100: ObjectSchema = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  schema: {
    title: 'company;',
    type: 'object',
    description: 'company details',
    properties: {
      bs: {
        type: 'string',
        description: 'lattitude',
      },
      catchPhrase: {
        type: 'string',
        description: 'longtitude',
      },
      name: {
        type: 'string',
        description: 'longtitude',
      }
    },
    required: true,
    additionalProperties: false,
  },
  example: {
    bs: "harness real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Romaguera-Crona"
  }
}

const address100: ObjectSchema = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  schema: {
    title: 'address;',
    type: 'object',
    description: 'company details',
    properties: {
      city: {
        type: 'string',
        description: 'city',
      },
      street: {
        type: 'string',
        description: 'street',
      },
      suite: {
        type: 'string',
        description: 'apartment number',
      },
      zipcode: {
        type: 'string',
        description: 'zip code / post code',
      }
    },
    required: true,
    additionalProperties: false,
  },
  example: {
    city: "London",
    street: "Elizabeth Street 34",
    suite: "2A",
    zipcode: "12345"
  }
}

const sampleUser = {
  id: 1,
  name: "Luna Lovegood",
  username: "luna",
  email: "luna@gymbeam.com",
  phone: "+4219066784855",
  website: "www.landonhotel.com",
  address: {
    city: "London",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    },
    street: "Elizabeth Street 34",
    suite: "2A",
    zipcode: "12345"
  },
  company: {
    bs: "harness real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Romaguera-Crona"
  }
}

const user100: ObjectSchema = {
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  schema: {
    title: 'user;',
    type: 'object',
    description: 'user entity',
    properties: {
      id: {
        type: 'number',
        description: 'user entity id"',
      },
      name: {
        type: 'string',
        description: 'users name',
      },
      username: {
        type: 'string',
        description: 'username',
      },
      email: {
        type: 'string',
        description: 'users email',
      },
      phone: {
        type: 'string',
        description: 'phone number',
      },
      website: {
        type: 'string',
        description: 'website',
      },
    },
    required: true,
    additionalProperties: false,
  },
  example: {
    id: 1,
    name: "Luna Lovegood",
    username: "luna",
    email: "luna@gymbeam.com",
    phone: "+4219066784855",
    website: "www.landonhotel.com"
  }
}

const address200: ObjectSchema = extend(address100, {
  version: {
    major: 2,
    minor: 0,
    patch: 0,
  },
  schema: {
    description: 'Full address',
    properties: {
      geo: {
        ...geo100.schema,
        see: geo100,
      },
    },
    example: {
      city: "London",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      },
      street: "Elizabeth Street 34",
      suite: "2A",
      zipcode: "12345"
    }
  }
})

const user200: ObjectSchema = extend(user100, {
  version: {
    major: 2,
    minor: 0,
    patch: 0,
  },
  schema: {
    description: 'Full user',
    properties: {
      company: {
        ...company100.schema,
        see: company100,
      },
      address: {
        ...address200.schema,
        see: address200,
      },
    },
    example: sampleUser,
  }
})

export const User = versionSchemas(user200)