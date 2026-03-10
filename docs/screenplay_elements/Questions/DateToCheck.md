[Back to overview](../../screenplay_elements.md)

# DateToCheck

The `DateToCheck` class provides a way to verify if a date is valid or how it compares to a compare date (before, equal, after). It allows for positive and negative checks. This class extends the `Question<boolean>` class. DateToCheck does not rely on any specific Ability.

## Table of Contents

- [DateToCheck](#datetocheck)
  - [Table of Contents](#table-of-contents)
  - [Class Overview](#class-overview)
    - [Extends](#extends)
    - [Methods](#methods)
      - [answeredBy](#answeredby)
      - [whichIs](#whichis)
      - [is](#is)
      - [isNot](#isnot)
      - [valid](#valid)
      - [after](#after)
      - [before](#before)
      - [equalTo](#equalto)
      - [failAsFalse](#failasfalse)

## Class Overview

### Extends

This class extends the `Question<boolean>` class, providing specific functionality for verifying states of a given date.

### Methods

#### answeredBy

```typescript
public async answeredBy(actor: Actor): Promise<boolean>;
```

- **Description:** Perform the verification based on the specified action.
- **Parameters:**
  - `actor` - The actor performing the action.
- **Returns:** `Promise<boolean>` - The verification result (true or false).

#### whichIs

*Introduced in: 1.0.0*

```typescript
static get whichIs(date: Date): DateToCheck;
```

- **Description:** Create a new instance of the `DateToCheck` class for positive verification.
- **Parameters:**
  - `date` - The date to verify
- **Returns:** `DateToCheck` - A new instance of the `DateToCheck` class.

Usage:

```typescript
await actor.asks(
    DateToCheck.whichIs(myDate).is.valid,
);
```

#### is (public/static)

*Introduced in: 1.0.0*

```typescript
public get is(): DateToCheck;
// and 
static get is(): DateToCheck;
```

- **Description:** 
  - public: Sets the verification mode to positive
  - static: Create a new instance of the `DateToCheck` class for positive verification.
- **Returns:** `DateToCheck` - A new instance of the `DateToCheck` class.

Usage:

```typescript
await actor.asks(
    // public function
    DateToCheck.whichIs(myDate).is.valid,
    // or static function - date defaults to now
    DateToCheck.is.valid,
);
```

#### isNot (public/static)

*Introduced in: 1.0.0*

```typescript
public get isNot(): DateToCheck;
// and
static get isNot(): DateToCheck;
```

- **Description:**
  - public: Sets the verification mode to negative
  - static: Create a new instance of the `DateToCheck` class for negative verification.
- **Returns:** `DateToCheck` - A new instance of the `DateToCheck` class.

Usage:

```typescript
await actor.asks(
    // public function
    DateToCheck.whichIs(myDate).isNot.valid,
    // or static function - date defaults to now
    // this specific example will never come true because the default for date will always be a valid date
    DateToCheck.isNot.valid,
);
```

#### valid

*Introduced in: 1.0.0*

```typescript
public valid(): DateToCheck;
```

- **Description:** Set up the verification for vdate validity.
- **Returns:** `DateToCheck` - The updated instance of the `DateToCheck` class.

Usage:

```typescript
// To verify that the date is valid
await actor.asks(
    DateToCheck.whichIs(myDate).is.valid,
);
// To verify that the date is not valid
await actor.asks(
    DateToCheck.whichIs(myDate).isNot.valid,
);
```

#### after

*Introduced in: 1.0.0*

```typescript
public after(compareDate?: Date): DateToCheck;
```

- **Description:** Set up the verification for the date to be after a compare date.
- **Parameters:**
  - `compareDate` - The date to compare against (optional - defaults to now)
- **Returns:** `DateToCheck` - The updated instance of the `DateToCheck` class.

Usage:

```typescript
// To verify that the date is after compare date
await actor.asks(
    DateToCheck.whichIs(myDate).is.after(compareDate),
);
// To verify that the date is not after compare date
await actor.asks(
    DateToCheck.whichIs(myDate).isNot.after(compareDate),
);
```

#### before

*Introduced in: 1.0.0*

```typescript
public before(compareDate?: Date): DateToCheck;
```

- **Description:** Set up the verification for the date to be before a compare date.
- **Parameters:**
  - `compareDate` - The date to compare against (optional - defaults to now)
- **Returns:** `DateToCheck` - The updated instance of the `DateToCheck` class.

Usage:

```typescript
// To verify that the date is before compare date
await actor.asks(
    DateToCheck.whichIs(myDate).is.before(compareDate),
);
// To verify that the date is not before compare date
await actor.asks(
    DateToCheck.whichIs(myDate).isNot.before(compareDate),
);
```

#### equalTo

*Introduced in: 1.0.0*

```typescript
public equalTo(compareDate?: Date): DateToCheck;
```

- **Description:** Set up the verification for the date to be equal to a compare date.
- **Parameters:**
  - `compareDate` - The date to compare against (optional - defaults to now)
- **Returns:** `DateToCheck` - The updated instance of the `DateToCheck` class.

Usage:

```typescript
// To verify that the date is equal to compare date
await actor.asks(
    DateToCheck.whichIs(myDate).is.equalTo(compareDate),
);
// To verify that the date is not equal to compare date
await actor.asks(
    DateToCheck.whichIs(myDate).isNot.equalTo(compareDate),
);
```

#### failAsFalse

*Introduced in: 1.0.0*

```typescript
public get failAsFalse(): DateToCheck;
```

- **Description:** Returns false instead of failing when exception occurrs.
- **Returns:** `DateToCheck` - Returns the current question.

Usage:

```typescript
// get evaluation result based on valid check
const evaluationResult = await actor.asks(
    DateToCheck.whichIs(myDate).is.valid.failAsFalse,
);
// do whatever necessary with the result
```

[Back to overview](../../screenplay_elements.md)