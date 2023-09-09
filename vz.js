let addresses = async (filter) =>
  await fetch(
    'https://vapezone.ru/wp-admin/admin-ajax.php?action=get_map_for_shops',
    {
      headers: {
        accept: 'application/json',
        'cache-control': 'no-cache',
        pragma: 'no-cache',

        'x-requested-with': 'XMLHttpRequest',
        Referer: 'https://vapezone.ru/shops/',
      },
      body: null,
      method: 'GET',
    }
  ).then((response) => response.json());

module.exports = addresses;
