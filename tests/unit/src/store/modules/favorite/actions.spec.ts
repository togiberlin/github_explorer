import axios from 'axios';
import actions from '@/store/modules/favorite/actions';
import flushPromises from 'flush-promises';
import {
  FavoriteActions,
  FavoriteMutations,
  FavoriteState,
} from '@/store/modules/favorite/types';
import { ActionContext } from 'vuex';
import { RepoState } from '@/store/modules/repo/types';
import createMockFavoriteItem from '../../../../factories/favorite/favoriteItem';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('FavoriteActions', () => {
  let context = {} as unknown as ActionContext<FavoriteState, RepoState>;

  beforeEach(() => {
    context = {
      commit: jest.fn(),
    } as unknown as ActionContext<FavoriteState, RepoState>;
  });

  describe(`${FavoriteActions.GET_FAVORITE_ITEMS}`, () => {
    it('commits the result into the store', async () => {
      expect.assertions(1);
      const mockFavoriteItem = createMockFavoriteItem();
      const mockResponse = { data: [mockFavoriteItem] };
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));

      actions.getFavoriteItems(context);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_ITEMS, mockResponse.data,
      );
    });

    it('commits the httpError in the store', async () => {
      expect.assertions(1);
      const mockError = new Error('Unit test mock exception. Something went wrong 123!');
      mockedAxios.get.mockRejectedValueOnce(mockError);

      actions.getFavoriteItems(context);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, mockError,
      );
    });
  });

  describe(`${FavoriteActions.ADD_FAVORITE_ITEM}`, () => {
    it('commits the result into the store', async () => {
      expect.assertions(1);
      const mockFavoriteItem = createMockFavoriteItem();
      const mockResponse = { data: mockFavoriteItem };
      mockedAxios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));

      actions.addFavoriteItem(context, mockFavoriteItem);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_ITEMS, mockResponse.data,
      );
    });

    it('commits the httpError in the store', async () => {
      expect.assertions(1);
      const mockFavoriteItem = createMockFavoriteItem();
      const mockError = new Error('Unit test mock exception. Something went wrong 456!');
      mockedAxios.post.mockRejectedValueOnce(mockError);

      actions.addFavoriteItem(context, mockFavoriteItem);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, mockError,
      );
    });
  });

  describe(`${FavoriteActions.REMOVE_FAVORITE_ITEM}`, () => {
    it('commits the result into the store', async () => {
      expect.assertions(1);
      const mockFavoriteItem = createMockFavoriteItem();
      const mockResponse = { data: mockFavoriteItem };
      mockedAxios.delete.mockImplementationOnce(() => Promise.resolve(mockResponse));

      actions.removeFavoriteItem(context, mockFavoriteItem);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_ITEMS, mockResponse.data,
      );
    });

    it('commits the httpError in the store', async () => {
      expect.assertions(1);
      const mockFavoriteItem = createMockFavoriteItem();
      const mockError = new Error('Unit test mock exception. Something went wrong 789!');
      mockedAxios.delete.mockRejectedValueOnce(mockError);

      actions.removeFavoriteItem(context, mockFavoriteItem);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, mockError,
      );
    });
  });

  describe(`${FavoriteActions.REMOVE_ALL_FAVORITE_ITEMS}`, () => {
    it('commits the result into the store', async () => {
      expect.assertions(1);
      const mockResponse = { data: [] };
      mockedAxios.delete.mockImplementationOnce(() => Promise.resolve(mockResponse));

      actions.removeAllFavoriteItems(context);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_ITEMS, mockResponse.data,
      );
    });

    it('commits the httpError in the store', async () => {
      expect.assertions(1);
      const mockError = new Error(' Unit test mock exception. Something went wrong 012!');
      mockedAxios.delete.mockRejectedValueOnce(mockError);

      actions.removeAllFavoriteItems(context);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, mockError,
      );
    });
  });
});
