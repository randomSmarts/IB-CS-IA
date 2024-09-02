FROM elixir:latest

RUN mix local.hex --force && mix local.rebar --force

WORKDIR /app
COPY . /app

RUN mix deps.get
RUN mix phx.digest
RUN mix compile

CMD ["mix", "phx.server"]
