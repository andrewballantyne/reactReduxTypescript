import * as React from 'react';

// We don't export this because it's our internal implementation if we want to add to both classes
abstract class BaseAbstractComponent<P, S> extends React.Component<P, S> {
}

// With State
export abstract class AbstractStatefulComponent<P, S> extends BaseAbstractComponent<P, S> {}

// Without State
export abstract class AbstractStatelessComponent<P> extends BaseAbstractComponent<P, any> {}
