export async function up(knex) {
  await knex.schema.createTable("urls", (table) => {
    table.uuid("id").primary();

    table.string("original_url", 2048).notNullable();

    table.string("short_code", 20).notNullable().unique();

    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.timestamp("expires_at").nullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("urls");
}