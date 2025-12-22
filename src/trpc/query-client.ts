import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
/**
 * Create a QueryClient preconfigured with the application's default query options.
 *
 * Configured options include a 30-second query stale time and a dehydrate policy that
 * dehydrates queries when the library default indicates so or when a query is in the
 * `'pending'` state. (Placeholders for optional SuperJSON serialize/deserialize are present.)
 *
 * @returns A configured `QueryClient` instance
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}