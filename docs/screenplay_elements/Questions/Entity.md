[Back to overview](../../screenplay_elements.md)

# Entity

The `Entity` class provides a way to verify if an entity/object has a desired attribute optinally with a desired value. It allows for positive and negative checks. This class extends the `Question<boolean>` class. Entity does not rely on any specific Ability.

## Table of Contents

- [Entity](#entity)
  - [Table of Contents](#table-of-contents)
  - [Class Overview](#class-overview)
    - [Extends](#extends)
    - [Methods](#methods)
      - [answeredBy](#answeredby)
      - [has](#has)
      - [hasNot](#hasnot)
      - [attribute](#attribute)
      - [withValue](#withValue)
      - [failAsFalse](#failasfalse)

## Class Overview

### Extends

This class extends the `Question<boolean>` class, providing specific functionality for verifying states of a given entity/object.

### Methods

#### answeredBy

```typescript
public async answeredBy(actor: Actor): Promise<boolean>;
```

- **Description:** Perform the verification based on the specified action.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<boolean>` - The verification result (true or false).

#### has

*Introduced in: 1.0.0*

```typescript
static get has(): Entity;
```

- **Description:** Create a new instance of the `Entity` class for positive verification.
- **Returns:** `Entity` - A new instance of the `Entity` class.

Usage:

```typescript
await actor.asks(
    Entity.has.attribute(myArray, 'length'),
);
```

#### hasNot

*Introduced in: 1.0.0*

```typescript
static get hasNot(): Entity;
```

- **Description:** Create a new instance of the `Entity` class for negative verification.
- **Returns:** `Entity` - A new instance of the `Entity` class.

Usage:

```typescript
await actor.asks(
    Entity.hasNot.attribute(myArray, 'length'),
);
```

#### attribute

*Introduced in: 1.0.0*

```typescript
public attribute(obj: object, attribute: string): Entity;
```

- **Description:** Set up the verification for entity/object attribute lookup.
- **Returns:** `Entity` - The updated instance of the `Entity` class.

Usage:

```typescript
// To verify that the entity has an attribute length
await actor.asks(
    Entity.has.attribute(myArray, 'length'),
);
// To verify that the entity has no attribute length
await actor.asks(
    Entity.hasNot.attribute(myObject, 'length'),
);
```

#### withValue

*Introduced in: 1.0.0*

```typescript
public withValue(value: unknown): Entity;
```

- **Description:** Set up the verification for entity/object attribute value lookup.
- **Returns:** `Entity` - The updated instance of the `Entity` class.

Usage:

```typescript
// To verify that the entity has an attribute length with value 1
await actor.asks(
    Entity.has.attribute(myArray, 'length').withValue(1),
);
// To verify that the entity has no attribute length with value 1
await actor.asks(
    Entity.hasNot.attribute(myArray, 'length').withValue(1),
);
```

#### failAsFalse

*Introduced in: 1.0.0*

```typescript
public get failAsFalse(): Entity;
```

- **Description:** Returns false instead of failing when exception occurrs.
- **Returns:** `Entity` - Returns the current question.

Usage:

```typescript
// get evaluation result based on valid check
const evaluationResult = await actor.asks(
    Entity.has.attribute(myArray, 'length').failAsFalse,
);
// do whatever necessary with the result
```

[Back to overview](../../screenplay_elements.md)