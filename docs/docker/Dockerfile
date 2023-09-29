FROM apache/superset

COPY ./superset_config.py /app/pythonpath/superset_config.py

# Switching to root to install the required packages
USER root

# iInstalling a driver to connect to SqlServer
RUN pip install pymssql

# Switching back to using the `superset` user
USER superset

